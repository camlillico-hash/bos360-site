"use client";

import { useEffect, useState } from "react";
import { CheckSquare, Plus, Save, Check, CornerUpLeft, Trash2 } from "lucide-react";

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [form, setForm] = useState<any>({ relatedType: "contact" });
  const [error, setError] = useState("");

  const load = async () => {
    setTasks(await (await fetch('/api/crm/tasks', { cache: 'no-store' })).json());
    const contactsRes = await (await fetch('/api/crm/contacts', { cache: 'no-store' })).json();
    setContacts(Array.isArray(contactsRes) ? contactsRes : contactsRes.contacts || []);
  };
  useEffect(() => { load(); }, []);

  const contactName = (id?: string) => {
    const c = contacts.find((x) => x.id === id);
    return c ? `${c.firstName || ''} ${c.lastName || ''}`.trim() : 'Unknown contact';
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold inline-flex items-center gap-2"><CheckSquare size={20} /> Tasks & Reminders</h1>

      <div className="crm-card p-4">
        <h2 className="font-semibold"><span className="inline-flex items-center gap-1.5"><Plus size={14} /> Add task</span></h2>
        <div className="mt-2 grid gap-2 md:grid-cols-2">
          <input placeholder="Task title" className="crm-input" value={form.title || ''} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          <select className="crm-input" value={form.relatedId || ''} onChange={(e) => setForm({ ...form, relatedId: e.target.value, relatedType: 'contact' })}>
            <option value="">Select linked contact *</option>
            {contacts.map((c) => <option key={c.id} value={c.id}>{c.firstName} {c.lastName} {c.email ? `(${c.email})` : ''}</option>)}
          </select>
          <input type="date" className="crm-input" value={form.dueDate || ''} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} />
          <input placeholder="Notes" className="crm-input" value={form.notes || ''} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
        </div>
        {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
        <button className="mt-2 crm-btn" onClick={async () => {
          setError('');
          const res = await fetch('/api/crm/tasks', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...form, done: false, relatedType: 'contact' }) });
          if (!res.ok) { const j = await res.json().catch(() => ({})); setError(j.error || 'Could not save task'); return; }
          setForm({ relatedType: 'contact' });
          load();
        }}><span className="inline-flex items-center gap-1.5"><Save size={14} /> Save task</span></button>
      </div>

      <div className="space-y-2">
        {tasks.map((t) => (
          <div key={t.id} className="flex items-center justify-between crm-card p-3">
            <div>
              <p className={t.done ? 'line-through text-slate-500' : ''}>{t.title}</p>
              <p className="text-xs text-emerald-300">Contact: {contactName(t.relatedId)}</p>
              <p className="text-xs text-slate-400">Due: {t.dueDate || '—'} {t.notes ? `· ${t.notes}` : ''}</p>
            </div>
            <div className="flex gap-2">
              <button className="crm-btn-ghost text-xs" onClick={async () => {
                await fetch('/api/crm/tasks', {
                  method: 'PUT',
                  headers: { 'content-type': 'application/json' },
                  body: JSON.stringify({ ...t, done: !t.done, relatedType: 'contact' }),
                });
                load();
              }}>{t.done ? <span className='inline-flex items-center gap-1'><CornerUpLeft size={13} /> Undo</span> : <span className='inline-flex items-center gap-1'><Check size={13} /> Done</span>}</button>
              <button className="text-xs text-red-300" onClick={async () => { await fetch(`/api/crm/tasks?id=${t.id}`, { method: 'DELETE' }); load(); }}><span className="inline-flex items-center gap-1"><Trash2 size={13} /> Delete</span></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
