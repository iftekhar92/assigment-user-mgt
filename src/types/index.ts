export interface ADDRESS_TYPES {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

export interface COMPANY_TYPE {
    name: string;
    catchPhrase: string;
    bs: string;
}
export interface USER_TYPES {
    id: number;
    name: string;
    email: string;
    address: ADDRESS_TYPES
    company: COMPANY_TYPE,
    phone:string;
}

export interface USER_DISPLAY_TYPES {
    id: number;
    name: string;
    email: string;
    address: string
    company: string,
    phone:string;
}

export interface THEAM_TYPES {
    mode: string | undefined
}