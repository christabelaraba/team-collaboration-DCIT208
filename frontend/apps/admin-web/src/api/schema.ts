import { z } from "zod";

export const AuthSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

// export const ProductSchema = z.object({
//     id: z.number(),
//     picture_url: z.string(),
//     model: z.string(),
//     prime: z.string(),
//     createAt: z.string().optional()
// })

// export const ProductResponseSchema = z.object({
//     response_code: z.string(),
//     response_message: z.string(),
//     data: z.array(ProductSchema)
   
// })


export type AuthType = z.infer<typeof AuthSchema>

// export type ProductType = z.infer<typeof ProductSchema>
// export type ProductResponseType = z.infer<typeof ProductResponseSchema>