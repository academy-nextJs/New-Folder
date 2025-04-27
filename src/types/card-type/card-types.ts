export interface ICard {
    image?: string;
    rate: string;
    title: string;
    address?: string;
    view: '1' | '2';
    rooms?: number;
    bathrooms?: number;
    parking?: number;
    transaction_type?: string;
    price?: string;
    id: string;
    discountedPrice?: number;
  }