interface ICreateOfferDTO {
  id?: string;
  price: number;
  quantity: number;
  coin: string;
  userId: number;
  walletId: string;
  createdAt: Date;
}

export { ICreateOfferDTO };
