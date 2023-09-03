"use client";
import { redirect } from "next/navigation";

export async function fetchJSON<T>(
  path: string,
  options: RequestInit,
  allowedStatusCodes?: number[]
): Promise<T> {
  const res = await fetchURL(path, options, allowedStatusCodes);
  return (await res.json()) as T;
}

export async function fetchURL(
  path: string,
  options: RequestInit,
  allowedStatusCodes?: number[]
): Promise<Response> {
  options.headers = { "X-App-Request": "1", ...options.headers };
  allowedStatusCodes = allowedStatusCodes || [];

  const res: Response = await fetch(path, {
    credentials: "same-origin",
    ...options,
  });

  if (res.ok || allowedStatusCodes.includes(res.status)) {
    return res;
  }

  if (res.status === 401) {
    redirectToLogin();
  }

  const error = new Error(`Failed to fetch: ${options.method} ${path}`);

  throw error;
}

export const redirectToLogin = () => {
  return redirect("/login-as-ren");
};
