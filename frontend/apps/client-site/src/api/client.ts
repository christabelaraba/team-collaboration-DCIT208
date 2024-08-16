import { create } from 'apisauce'

// define the api
export const api = create({
	baseURL: 'https://76f3-188-166-171-202.ngrok-free.app/api',
	headers: { 'Content-Type': 'application/json' },
})