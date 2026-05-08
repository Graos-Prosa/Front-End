export type ProductType = {
    id: number;
    img: string;
    name: string;
    price: string;
    rating: number;
    amount: number;
    productType: "coffee" | "accessory";
    discount?: number;
}