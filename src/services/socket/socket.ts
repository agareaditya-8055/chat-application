import { io } from 'socket.io-client'; import { env } from '@/shared/lib/env';
export const socket=io(env.VITE_SOCKET_URL,{autoConnect:false,withCredentials:true,transports:['websocket','polling']});
export const connectSocket=()=>{if(!socket.connected) socket.connect();}; export const disconnectSocket=()=>socket.disconnect();
