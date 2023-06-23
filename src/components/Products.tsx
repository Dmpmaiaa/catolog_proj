"use client";

interface IProducts {
  products: {
    _id: string;
    userId: string;
    title: string;
    description: string;
    price: number;
  }[];

  loading: boolean;
}

export default function Products({ products, loading }: IProducts) {
  return (
    <div>
      {Array.isArray(products) ?
        products.map((product) => (
           
          <div
            key={product._id}
            className="my-2 p-4 border rounded-md border-slate-400 sm:"
          >
            <h3 className="font-bold">{product.title}</h3>
            <p>{product.description}</p>
            <div className="bg-green-400 w-14 text-center p-1 rounded-md my-1">
              <p className="font-extralight">{product.price}€</p>
            </div>
          </div>
        )) : 
        <h3>No products to be displayed</h3>}
    </div>
  );
}
