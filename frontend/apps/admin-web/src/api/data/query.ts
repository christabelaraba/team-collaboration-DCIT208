import apiClient from "../client"
import { CustomersResponse, DefaultApiResponse, EnquiriesResponse, GetOrderResponse, GetProductResponse, GetQuotesResponse, GetUserResponse, GetUsersResponse, MonthlyQuoteStatsResponse, ProductDetailsApiResponse, QuoteIdRecordResponse, QuoteStatisticsResponse, SettingsDetailsApiResponse, UserProfile } from "./interfaces"
// import { ProductResponseSchema, ProductResponseType } from "../schema"





export const getCustomers = async (): Promise<CustomersResponse | undefined> => {
   const res = await apiClient.get<CustomersResponse>('/admin/customers')
   return res.data
}


// export const getQuotes = async (): Promise<GetQuotesResponse | undefined> => {
//    const res = await apiClient.get<GetQuotesResponse>('/admin/quote');
//    return res.data;  // Ensure you're returning res.data, not just res
// };


export const getEnquiries = async (): Promise<EnquiriesResponse | undefined> => {
   const res = await apiClient.get<EnquiriesResponse>('/admin/enquiries')
   return res.data ? res.data : undefined;
}

export const getEnquiry = async (id: string) => {
   const res = await apiClient.get(`/admin/enquiries/${id}`)
   return res  
}


export const searchEnquiries = async ({customer_id, status, start_date, end_date }: { customer_id?: string; status?: string; start_date?: string; end_date?: string;}) => {
   const params = {
     customer_id,
     status,
     start_date,
     end_date,
   };
  
   try {
     const res = await apiClient.get('/admin/enquiries', params);
   //   console.log("API Response:", res);
     return res;
   } catch (error) {
     console.error("API Error:", error);
     throw error; // Re-throw the error for handling in the calling code
   }
};


// export const getOrders = async (p0?: { start_date: string | undefined; end_date: string | undefined }): Promise<GetOrderResponse | undefined> => {   
//    const res = await apiClient.get<GetOrderResponse>('/admin/order', p0);
//    return res.data ? res.data : undefined;
// }

export const getOrders = async (): Promise<GetOrderResponse | undefined> => {   
   const res = await apiClient.get<GetOrderResponse>('/admin/order');
   return res.data;
};

export const getOrdersFilter = async (params: { start_date?: string, end_date?: string }): Promise<GetOrderResponse | undefined> => {
   const res = await apiClient.get<GetOrderResponse>('/admin/order', { params });
   return res.data;
};


export const getQuotes = async (): Promise<GetQuotesResponse | undefined> => {
   const res = await apiClient.get<GetQuotesResponse>('/admin/quote');
   return res.data ? res.data : undefined;
};


export const searchQuotes = async ({customer_id, status, start_date, end_date }: { customer_id?: string; status?: string; start_date?: string; end_date?: string;}) => {
   const params = {
     customer_id,
     status,
     start_date,
     end_date,
   };
  
   try {
     const res = await apiClient.get('/admin/quote', params);
     return res;
   } catch (error) {
     console.error("API Error:", error);
     throw error; // Re-throw the error for handling in the calling code
   }
};

export const getQuoteMonthlyStats = async (month: number): Promise<MonthlyQuoteStatsResponse | undefined> => {
   const res = await apiClient.get<MonthlyQuoteStatsResponse>(`/admin/quote_stats?month=${month}`);
   return res.data ? res.data : undefined;
}


export const getAdminUsers = async (): Promise<GetUsersResponse | undefined> => {
   const res = await apiClient.get<GetUsersResponse>('/admin/users')
   return res.data ? res.data : undefined;
}

export const getAdminUser = async (id: number): Promise<GetUserResponse | undefined> => {   
   const res = await apiClient.get<GetUserResponse>(`/admin/user/${id}`)
   return res.data ? res.data : undefined;
}

export const createProduct = async (data: {id: number, model: string, prime: string, picture_url?: string, description?: string, voltage?: string, engine?: string, frequency?: string, alternator?: string, amp_per_phase?: string, power?: string, fuel_type?: string, size?: string }): Promise<DefaultApiResponse | undefined> => {
   const res = await apiClient.post<DefaultApiResponse>("/admin/product/add", data);
   return res.data;
};

export const save_general_settings = async (data: {company_name?: string, company_email?: string, company_phone?: string, company_address?: string, language?: string, currency?: string }): Promise<DefaultApiResponse | undefined> => {
   const res = await apiClient.post<DefaultApiResponse>("/admin/save_general_settings", data);
   return res.data;
};

export const get_general_settings = async (): Promise<SettingsDetailsApiResponse | undefined> => {   
   const res = await apiClient.get<SettingsDetailsApiResponse>(`/admin/general_settings`);
   return res.data ? res.data : undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProducts = async (params?: {product_id: any, stock_status: any}): Promise<GetProductResponse | undefined> => {  
   const res = await apiClient.get<GetProductResponse>('/admin/products', params)
   return res.data ? res.data : undefined;
}


export const getProduct = async (id: string): Promise<ProductDetailsApiResponse | undefined> => {
   const res = await apiClient.get<ProductDetailsApiResponse>(`/admin/products/${id}`);
   return res.data  
}

export const updateProduct = async (data: {id: number, model?: string, prime?: string, picture_url?: string, description?: string, voltage?: string, engine?: string, frequency?: string, alternator?: string, amp_per_phase?: string, power?: string, fuel_type?: string, size?: string }): Promise<DefaultApiResponse | undefined> => {
   const res = await apiClient.post<DefaultApiResponse>("/admin/product/update", data);
   return res.data;
};
 

export const getQuoteId = async (): Promise<QuoteIdRecordResponse | undefined> => {
   const res = await apiClient.get<QuoteIdRecordResponse>('/admin/get_new_quote_id');
   return res.data;
};

export const getQuoteStatistics = async (): Promise<QuoteStatisticsResponse | undefined> => {
   const res = await apiClient.get<QuoteStatisticsResponse>('/admin/quotes_statistics');
   return res.data;
};

export const getProfile = async (): Promise<UserProfile | undefined> => {
   const res = await apiClient.get<UserProfile>('/admin/profile');
   return res.data;
};


export const updateProfile = async (profileData: {first_name: string; last_name: string; phone_number: string; }): Promise<DefaultApiResponse | undefined> => {
   const res = await apiClient.post<DefaultApiResponse>("/admin/profile/update", profileData);
   return res.data;
};


export const updateUserRecord = async (userData: {first_name: string; last_name: string; phone_number: string; email: string }): Promise<DefaultApiResponse | undefined> => {   
   const res = await apiClient.post<DefaultApiResponse>("/admin/user/update", userData);
   return res.data;
};

export const addUserRecord = async (userData: {first_name: string; last_name: string; email: string, user_role: string }): Promise<DefaultApiResponse | undefined> => {   
   const res = await apiClient.post<DefaultApiResponse>("/admin/user/add", userData);
   return res.data;
};

export const deleteUser = async (id: number): Promise<DefaultApiResponse | undefined> => {
   const res = await apiClient.delete<DefaultApiResponse>(`/admin/user/${id}`);
   return res.data;
};



export const logout = async (): Promise<DefaultApiResponse | undefined> => {
   try {
     const res = await apiClient.post<DefaultApiResponse>('/admin/logout');
     return res.data;
   } catch (error) {
     console.error('Logout error:', error);
   }
 };