"use client";

import Link from "next/link";
import { Users, BriefcaseBusiness, CheckSquare, Settings, LogOut } from "lucide-react";

export default function Nav() {
  return (
    <nav className="flex items-center gap-1 text-sm">
      <Link className="crm-nav-link inline-flex items-center gap-1.5" href="/crm/contacts"><Users size={14} /> Contacts</Link>
      <Link className="crm-nav-link inline-flex items-center gap-1.5" href="/crm/deals"><BriefcaseBusiness size={14} /> Deals</Link>
      <Link className="crm-nav-link inline-flex items-center gap-1.5" href="/crm/tasks"><CheckSquare size={14} /> Tasks</Link>
      <Link className="crm-nav-link inline-flex items-center gap-1.5" href="/crm/settings"><Settings size={14} /> Settings</Link>
      <button
        type="button"
        className="crm-btn-ghost inline-flex items-center gap-1.5"
        onClick={async () => {
          await fetch('/api/crm/auth', { method: 'DELETE' });
          window.location.href = '/crm/login';
        }}
      >
        <LogOut size={14} /> Logout
      </button>
    </nav>
  );
}
