import { api } from '../client'

interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    message: string;
}

interface ApiResponse {
    data: {
        response_code: string;
        response_message: string;
    }
}


export const makeEnquiry = async (data: unknown) => {
	const res = await api.post('/make_enquiry', data)
	return res
}


export const contactUs = async (data: FormData): Promise<ApiResponse> => {
    const res = await api.post<ApiResponse>('/contact_us', data);
    return res.data; // Make sure to return res.data, not res
}


export const orderOnline = async (data: unknown) => {
	const res = await api.post('/order_online', data)
	return res
}