const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

export async function apiFetch<T>(
  url: string,
  method = "GET",
  data?: Record<string, unknown>
) {
  const res = await fetch(`${baseUrl}${url}?apikey=${accessKey}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!res.ok) {
    throw new Error("Failed call API");
  }

  return (await res.json()) as T;
}
