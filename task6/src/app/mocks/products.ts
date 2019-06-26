export interface IProduct {
  id: number;
  name: string,
  description: string
}

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the first product'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the second product'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is the third product'
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is the fourth product'
  }
]
