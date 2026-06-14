import axios from 'axios';
export interface AppError { message:string; code?:string; status?:number; fields?:Record<string,string> }
export function normalizeApiError(error:unknown):AppError { if(axios.isAxiosError(error)){const body=error.response?.data as {message?:string;code?:string;errors?:Record<string,string>}|undefined;return {message:body?.message??error.message??'Something went wrong',code:body?.code,status:error.response?.status,fields:body?.errors};} return {message:error instanceof Error?error.message:'Unexpected error'}; }
