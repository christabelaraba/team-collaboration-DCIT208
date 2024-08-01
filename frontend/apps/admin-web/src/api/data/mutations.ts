import { api } from "../client"
// import { AuthSchema } from "../schema"

interface AddProductsProps {
  model: string,
  frequency: string,
  description: string,
  fuel_type: string,
  power: string,
  voltage: string,
  price: number,
  amp_per_phase: string,
  color: string,
  alternator: string,
  engine: string,
  prime: string,
  size: string,
  warranty: string,
  type: string,
  other: string
   
}

export const LoginFunc = async ({ email, password }: { email: string; password: string }) => {
   const res = await api.post('/admin/login', { email, password })
   return res
}

export const AddProducts = async (data: AddProductsProps) => {
   const res = await api.post('/admin/create_product', data)
   return res
}