// import { create } from 'apisauce'
// import Cookies from 'js-cookie'
// // define the api
// export const api = create({
// 	baseURL: 'https://76f3-188-166-171-202.ngrok-free.app/api',
// 	headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${Cookies.get('token')}` },
// })

import { create } from 'apisauce'
import Cookies from 'js-cookie'
const apiClient = create({
	baseURL: 'https://76f3-188-166-171-202.ngrok-free.app/api',
	// baseURL: "https://api2.zippy.com.gh",
})

apiClient.addAsyncRequestTransform(async request => {
	const authToken = await Cookies.get('token')
	if (!authToken) return
  // @ts-ignore
	request.headers['Authorization'] = `Bearer ${authToken}`
})
export default apiClient
