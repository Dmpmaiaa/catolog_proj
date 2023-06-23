"use client";
import Pagination from "@/components/Pagination";
import Products from "@/components/Products";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function userProducts() {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    const fetchProducts = async (uid: number | undefined) => {
      setLoading(true);
      if (uid) {
        console.log(session?.user)
        const res = await fetch(`/api/user/${uid}`, {
          headers: {
            accessToken: String(session?.user.accessToken),
          },
        });
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      }
    };

    fetchProducts(session?.user._id);
  }, [session]);

  // Get current posts

    const lastProductIdx = currentPage * productsPerPage;
    const firstProductIdx = lastProductIdx - productsPerPage;
    const currentProducts = products.slice(firstProductIdx, lastProductIdx);
  

  return (
    <div>
      <Products products={currentProducts} loading={loading} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={(num: number) => setCurrentPage(num)}
        currentPage={currentPage}
      />
    </div>
  );
}
