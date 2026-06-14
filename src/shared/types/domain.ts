export interface User { id:string; username:string; email:string; avatarUrl?:string; status?:'online'|'offline'; lastSeen?:string }
export interface Chat { id:string; name?:string; isGroup:boolean; participants:User[]; latestMessage?:Message; unreadCount:number; createdAt:string; updatedAt:string }
export type MessageStatus='sending'|'sent'|'delivered'|'read'|'failed';
export interface Attachment { id:string; url:string; type:'image'|'file'; name:string; size?:number }
export interface Message { id:string; clientId?:string; chatId:string; sender:User; content:string; attachments:Attachment[]; status:MessageStatus; createdAt:string; deletedAt?:string }
export interface PaginatedResponse<T>{data:T[]; page:number; hasMore:boolean}
export interface ApiEnvelope<T>{data:T; message?:string; success?:boolean}
