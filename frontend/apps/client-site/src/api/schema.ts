import { z } from 'zod'

export const ProductSchema = z.object({
	active_status: z.number().optional(),
	alternator: z.string().optional(),
	amp_per_phase: z.string().optional(),
	color: z.string().optional(),
	createdAt: z.string().optional(),
	delete_status: z.number().optional(),
	description: z.string().optional(),
	engine: z.string().optional(),
	frequency: z.string().optional(),
	fuel_type: z.string().optional(),
	id: z.number().optional(),
	model: z.string().optional(),
	other: z.string().optional(),
	picture_url: z.string().optional(),
	power: z.string().optional(),
	price: z.number().optional(),
	prime: z.string().optional(),
	size: z.string().optional(),
	type: z.string().optional(),
	voltage: z.string().optional(),
	warranty: z.string().optional(),
})

export const ProductResponseSchema = z.object({
	response_code: z.string(),
	response_message: z.string(),
	data: z.array(ProductSchema),
})

export const SingleProductResponseSchema = z.object({
	response_code: z.string(),
	response_message: z.string(),
	data: ProductSchema,
})

export type ProductType = z.infer<typeof ProductSchema>
export type ProductResponseType = z.infer<typeof SingleProductResponseSchema>
export type ProductsResponseType = z.infer<typeof ProductResponseSchema>

