import { api } from "../client"
import { ProductResponseSchema, ProductResponseType } from "../schema"

export const getProductList = async () => {
   const res = await api.get('/products')
   const response = ProductResponseSchema.parse(res.data)
   if (response.response_code === '000') {
    return res.data as ProductResponseType
   }else{
    console.error('Something went wrong')
    throw Error
   }
   
}