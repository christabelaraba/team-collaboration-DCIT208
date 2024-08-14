import apiClient from "../client"
// import { ProductResponseSchema, ProductResponseType } from "../schema"

export const getEnquiries = async () => {
   const res = await apiClient.get('/admin/enquiries')
   return res  
}

export const getEnquiry = async (id: string) => {
   const res = await apiClient.get(`/admin/enquiries/${id}`)
   return res  
}


export const getOrders = async () => {
   const res = await apiClient.get('/admin/order')
   return res  
}

export const getQuotes = async () => {
   const res = await apiClient.get('/admin/quote')
   return res  
}


export const getProducts = async () => {
   const res = await apiClient.get('/admin/products')
   console.log({res})
   return res  
}