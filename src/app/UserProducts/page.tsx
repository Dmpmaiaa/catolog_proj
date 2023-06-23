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
  const lastPostIdx = currentPage * productsPerPage;
  const firstPostIdx = lastPostIdx - productsPerPage;
  const currentProducts = products.slice(firstPostIdx, lastPostIdx);

  // Change page
  
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
