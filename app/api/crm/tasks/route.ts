import { NextResponse } from "next/server";
import { getStore, id, now, saveStore } from "@/lib/crm-store";

const TASK_STATUSES = ["Not started", "Complete", "Canceled"] as const;

function normalizeStatus(body: any) {
  const v = String(body.status || "").trim();
  if ((TASK_STATUSES as readonly string[]).includes(v)) return v;
  if (body.done === true) return "Complete";
  return "Not started";
}

function validateTaskPayload(body: any, store: any) {
  if (!String(body.title || "").trim()) return "Task title is required";
  if (body.relatedType !== "contact") return "Tasks must be associated to a contact";
  if (!String(body.relatedId || "").trim()) return "Linked contact is required";
  const contactExists = store.contacts.some((c: any) => c.id === body.relatedId);
  if (!contactExists) return "Linked contact not found";
  return null;
}

export async function GET() {
  const store = await getStore();
  return NextResponse.json({ tasks: store.tasks, statuses: TASK_STATUSES });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const store = await getStore();
  const error = validateTaskPayload(body, store);
  if (error) return NextResponse.json({ error }, { status: 400 });

  const status = normalizeStatus(body);
  const record = { id: id(), createdAt: now(), updatedAt: now(), ...body, status, done: status === "Complete" };
  store.tasks.unshift(record);
  await saveStore(store);
  return NextResponse.json(record);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const store = await getStore();
  const idx = store.tasks.findIndex((t) => t.id === body.id);
  if (idx < 0) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const error = validateTaskPayload(body, store);
  if (error) return NextResponse.json({ error }, { status: 400 });

  const status = normalizeStatus(body);
  store.tasks[idx] = { ...store.tasks[idx], ...body, status, done: status === "Complete", updatedAt: now() };
  await saveStore(store);
  return NextResponse.json(store.tasks[idx]);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const store = await getStore();
  store.tasks = store.tasks.filter((t) => t.id !== id);
  await saveStore(store);
  return NextResponse.json({ ok: true });
}
