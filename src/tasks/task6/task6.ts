export type Product = {
  title: string;
  price: number;
};

export function parseProduct(line: string): Product {
  const [title, priceStr] = line.split(" - ");
  return {
    title: title.trim(),
    price: parseFloat(priceStr),
  };
}

export function calcTotal(products: Product[]): number {
  return products.reduce((sum, p) => sum + p.price, 0);
}
