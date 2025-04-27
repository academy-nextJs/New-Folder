export interface ISlider {
    items: TItems[];
    view: '1' | '2';
}

type TItems = {
    photos?: string[]
    rate: string;
    title: string;
    address?: string;
    rooms?: number;
    bathrooms?: number;
    parking?: number;
    transaction_type?: string;
    price?: string;
    id: string;
    discountedPrice?: number;
}