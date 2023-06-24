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
            className="relative my-2 p-4 py-10 bg-scnd-white rounded-md"

          >
            <div className="bg-prime-violet min-w-11 p-3 h-11 text-center rounded-2xl flex items-center justify-center absolute top-[-20px] left-3">
              <p className="font-bold text-scnd-white text-xs">{product.price}€</p>
            </div>

            <h3 className="font-bold my-2">{product.title}</h3>
            <p className="text-[#6E8098] my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse soluta obcaecati, voluptate dolorem reprehenderit.</p>
            <p className="mt-8 mb-[-12px] font-bold text-prime-violet text-sm">Sneakers</p>
          </div>
        )) : 
        <h3>No products to be displayed</h3>}
    </div>
  );
}
