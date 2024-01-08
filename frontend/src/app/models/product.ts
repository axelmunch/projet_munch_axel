export class Product {
  ref: string;
  name: string;
  price: number;
  description: string;
  image: string;

  constructor(
    ref: string,
    name: string,
    price: number,
    description: string,
    image: string
  ) {
    this.ref = ref;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}
