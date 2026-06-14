import { z } from 'zod';
const schema=z.object({VITE_API_BASE_URL:z.string().url(),VITE_SOCKET_URL:z.string().url()});
const parsed=schema.safeParse(import.meta.env);
if(!parsed.success) throw new Error(`Invalid environment configuration: ${parsed.error.message}`);
export const env=Object.freeze(parsed.data);
