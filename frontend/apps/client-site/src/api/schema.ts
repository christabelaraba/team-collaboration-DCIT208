import { z } from "zod";

export const ProductSchema = z.object({
    active_status: z.number().nullable(),
    alternator: z.string().nullable(),
    amp_per_phase: z.string().nullable(),
    color: z.string().nullable(),
    createdAt: z.string().nullable(),
    delete_status: z.number().nullable(),
    description: z.string().nullable(),
    engine: z.string().nullable(),
    frequency: z.string().nullable(),
    fuel_type: z.string().nullable(),
    id: z.number().nullable(),
    model: z.string().nullable(),
    other: z.string().nullable(),
    picture_url: z.string().nullable(),
    power: z.string().nullable(),
    price: z.number().nullable(),
    prime: z.string().nullable(),
    size: z.string().nullable(),
    type: z.string().nullable(),
    voltage: z.string().nullable(),
    warranty: z.string().nullable()
})

export const ProductResponseSchema = z.object({
    response_code: z.string(),
    response_message: z.string(),
    data: z.array(ProductSchema)
   
})

export const SingleProductResponseSchema = z.object({
    response_code: z.string(),
    response_message: z.string(),
    data: ProductSchema
   
})


export type ProductType = z.infer<typeof ProductSchema>
export type ProductResponseType = z.infer<typeof ProductResponseSchema>