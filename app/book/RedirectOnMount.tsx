"use client";

import { useEffect } from "react";

export default function RedirectOnMount({ targetUrl }: { targetUrl: string }) {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      window.location.replace(targetUrl);
    }, 120);

    return () => window.clearTimeout(timeoutId);
  }, [targetUrl]);

  return null;
}
