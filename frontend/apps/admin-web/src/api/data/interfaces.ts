export interface Quote {
    id: string;
    quote_id: string;
    created_at: string;
    customer_name: string;
    customer_id: string;
    price: number;
    status: string;
}

export interface GetQuotesResponse {
    data: Quote[];
}



export interface MonthlyQuoteStats {
    week: number;
    approved: number;
    pending: number;
    rejected: number;
}


export interface MonthlyQuoteStatsResponse {
    data: {
        weekly_stats: MonthlyQuoteStats[],
        overall_counts: {
            approved: number;
            pending: number;
            rejected: number;
        }
    }
}

export interface QuoteIdRecordResponse {
    // data: {
        response_code: string;
        data: string;
    // }
}


export interface QuoteStatisticsResponse {
    // data: {
    response_code: string,
    response_message: "Statistics records found",
    data: {
        totalQuoteCount: number,
        pendingQuoteCount: number,
        approvedQuoteCount: number,
        rejectedQuoteCount: number
    }
    //   }
}


export interface Customers {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    location: string;
    active_status: boolean;
    del_status: boolean;
    created_at: string;
    updated_at: string;

}

export interface CustomersResponse {
    data: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [x: string]: any;
        data: Customers[];
    };
}



export interface Enquiries {
    id: string;
    customer_id: number;
    customer_name: string;
    email?: string;
    product_id?: number;
    message?: string;
    createdAt: string;
    updatedAt: string;

}

export interface EnquiriesResponse {
    data: Enquiries[];
}


export interface Order {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    message: string;
    location: string;
    company_address: string;
    company_name: string;
    power_required: string;
    price: number | null;
    quantity: number | null;
    total: number | null;
    order_status: string | null;
    payment_status: string | null;
    payment_method: string | null;
    user_id: number | null;
    createdAt: string;
    updatedAt: string;
  }

export interface GetOrderResponse {
    data: Order[];
}


export interface Product {
    id: number;
    model: string;
    prime: string;
    createdAt: string;
    picture_url: string;
    description: string;
    voltage: string;
    engine: string;
    frequency: string;
    alternator: string;
    amp_per_phase: string;
    power: string;
    fuel_type: string;
    size: string;
    price?: number;
    color?: string;
    stock_status?: string;
}

export interface GetProductResponse {
    data: Product[];
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone_number: string;
    user_role: string;
    active_status: boolean;
    del_status: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface GetUsersResponse {
    data: User[];
}

export interface GetUserResponse {
    data: User;
}


export interface UserProfile {
    data: {
        id: number;
        first_name: string;
        last_name: string;
        username: string;
        email: string;
        phone_number: string | null;
        user_role: string;
        active_status: boolean;
        del_status: boolean;
    }
}


export interface DefaultApiResponse { 
    response_code: string, response_message: string
}


export interface ProductDetailsApiResponse { 
    response_code: string, response_message: string, data: Product
}


export interface GeneralSettings {
    company_name?: string;
    company_email?: string;
    company_phone?: string;
    company_address?: string;
    language?: string;
    currency?: string;
}

export interface SettingsDetailsApiResponse { 
    response_code: string, response_message: string, data: GeneralSettings
}