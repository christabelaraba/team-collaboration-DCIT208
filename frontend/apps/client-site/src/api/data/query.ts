import { api } from "../client"

export const getProductList = async () => {
   const res = await api.get('/products')
   // const response = ProductResponseSchema.parse(res.data)
   // if (response.response_code === '000') {
    return res.data 
   // }else{
   //  console.error('Something went wrong')
   //  throw Error
   // }
   
}

export const getSingleProduct = async (id: string) => {
   const res = await api.get(`/products/${id}`)
   // const response = SingleProductResponseSchema.parse(res.data)
   // if (response.response_code === '000') {
    return res.data
   // }else{
   //  console.error('Something went wrong')
   //  throw Error
   // }
   
}