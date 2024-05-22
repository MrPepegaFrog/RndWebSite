const BASE_URL = import.meta.env.VITE_API_URL;

interface ApiParamsOptions {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH';
  headers?: HeadersInit;
  body?: BodyInit;
  isJson?: boolean;
}

function api<T>(url: string, options: ApiParamsOptions & { isJson?: true }): Promise<T>;

function api(url: string, options: ApiParamsOptions & { isJson?: false }): Promise<Response>;

async function api<T>(url: string, { method, body, headers, isJson = true }: ApiParamsOptions) {
  return fetch(BASE_URL + url, {
    headers,
    body,
    method
  }).then(async (data) => {
    if (!data.ok) {
      throw new Error(await data?.json());
    }

    return isJson ? (data?.json() as T) : data;
  });
}

export default api;
