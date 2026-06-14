import axios,{AxiosError,type InternalAxiosRequestConfig} from 'axios'; import { env } from '@/shared/lib/env';
interface RetryConfig extends InternalAxiosRequestConfig { _retry?:boolean }
export const apiClient=axios.create({baseURL:env.VITE_API_BASE_URL,withCredentials:true,headers:{'Content-Type':'application/json'}});
let refreshPromise:Promise<void>|null=null;
apiClient.interceptors.request.use((config)=>{config.headers.set('X-Client','relay-web');return config;});
apiClient.interceptors.response.use((response)=>response,async(error:AxiosError)=>{const original=error.config as RetryConfig|undefined;if(error.response?.status!==401||!original||original._retry||original.url?.includes('/auth/refresh-token')) return Promise.reject(error);original._retry=true;refreshPromise??=apiClient.post('/auth/refresh-token').then(()=>undefined).finally(()=>{refreshPromise=null;});await refreshPromise;return apiClient(original);});
