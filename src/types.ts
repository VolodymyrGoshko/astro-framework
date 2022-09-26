export interface IProduct {
    title: string,
    price: number,
    id: number,
    image: string,
    description: string,
    category: string,
    rating: {
        rate: number,
        count: number
    }
}