import { api } from "../client"
// import { ProductResponseSchema, ProductResponseType } from "../schema"

export const getEnquiries = async () => {
   const res = await api.get('/admin/enquiries')
   return res  
}

export const getEnquiry = async (id: string) => {
   const res = await api.get(`/admin/enquiries/${id}`)
   return res  
}


export const getOrders = async () => {
   const res = await api.get('/admin/order')
   return res  
}

export const getQuotes = async () => {
   const res = await api.get('/admin/quote')
   return res  
}