"use client";
import Products from "@/components/Products";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function userProducts() {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  useEffect(() => {
    const fetchProducts = async (uid: number | undefined) => {
      setLoading(true);
      if (uid) {
        const res = await fetch(`/api/user/${uid}`, {
          headers: {
            accessToken: String(session!.user.accessToken),
          },
        });
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      }
    };

    fetchProducts(session?.user._id);
  }, [session]);

  return (
    <div>
      <Products products={products} loading={loading} />
    </div>
  );
}
