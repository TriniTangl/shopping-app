export interface ShoppingState {
    list: Array<ShoppingItem>;
    loading: boolean;
    error: Error;
}

export interface ShoppingItem {
    id: string;
    name: string;
    amount: number;
    amountInCart: number;
}
