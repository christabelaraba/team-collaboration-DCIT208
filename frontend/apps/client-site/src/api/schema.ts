import { z } from "zod";

export const ProductSchema = z.object({
    id: z.number(),
    picture_url: z.string(),
    model: z.string(),
    prime: z.string(),
    createAt: z.string().optional()
})

export const ProductResponseSchema = z.object({
    response_code: z.string(),
    response_message: z.string(),
    data: z.array(ProductSchema)
   
})




export type ProductType = z.infer<typeof ProductSchema>
export type ProductResponseType = z.infer<typeof ProductResponseSchema>