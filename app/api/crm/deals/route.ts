import { NextResponse } from "next/server";
import { DEAL_STAGES, getStore, id, now, saveStore } from "@/lib/crm-store";

function normalizeStage(value: any) {
  const legacyMap: Record<string, string> = {
    "90-minute booked": "Fit meeting booked",
    "90-minute complete": "Fit meeting completed",
    "Verbal Yes": "Proposal / commitment",
    "Client signed (won)": "Launch paid (won)",
  };
  const v = legacyMap[String(value || "").trim()] || String(value || "").trim();
  if (!v) return DEAL_STAGES[0];
  return (DEAL_STAGES as readonly string[]).includes(v) ? v : DEAL_STAGES[0];
}

function normalizePrimaryPain(value: any) {
  const v = String(value || "").trim();
  return ["Execution", "Strategy", "Culture"].includes(v) ? v : undefined;
}

function normalizeClientStage(stage: string, clientStage: any) {
  if (stage !== "Launch paid (won)") return undefined;
  const v = String(clientStage || "").trim();
  if (v === "Launch" || v === "Active rhythm") return v;
  return "Launch";
}

export async function GET() {
  const store = await getStore();
  return NextResponse.json({ deals: store.deals, stages: DEAL_STAGES });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (!String(body.name || "").trim()) {
    return NextResponse.json({ error: "Deal name is required" }, { status: 400 });
  }
  if (!String(body.contactId || "").trim()) {
    return NextResponse.json({ error: "Linked contact is required" }, { status: 400 });
  }
  const store = await getStore();
  const stage = normalizeStage(body.stage || DEAL_STAGES[0]);
  const record = {
    id: id(),
    createdAt: now(),
    updatedAt: now(),
    ...body,
    stage,
    primaryPain: normalizePrimaryPain(body.primaryPain),
    clientStage: normalizeClientStage(stage, body.clientStage),
  };
  store.deals.unshift(record);
  await saveStore(store);
  return NextResponse.json(record);
}

export async function PUT(req: Request) {
  const body = await req.json();
  if (!String(body.name || "").trim()) {
    return NextResponse.json({ error: "Deal name is required" }, { status: 400 });
  }
  if (!String(body.contactId || "").trim()) {
    return NextResponse.json({ error: "Linked contact is required" }, { status: 400 });
  }
  const store = await getStore();
  const idx = store.deals.findIndex((d) => d.id === body.id);
  if (idx < 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const stage = normalizeStage(body.stage || store.deals[idx].stage);
  store.deals[idx] = {
    ...store.deals[idx],
    ...body,
    stage,
    primaryPain: normalizePrimaryPain(body.primaryPain),
    clientStage: normalizeClientStage(stage, body.clientStage ?? store.deals[idx].clientStage),
    updatedAt: now(),
  };
  await saveStore(store);
  return NextResponse.json(store.deals[idx]);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const store = await getStore();
  store.deals = store.deals.filter((d) => d.id !== id);
  await saveStore(store);
  return NextResponse.json({ ok: true });
}
