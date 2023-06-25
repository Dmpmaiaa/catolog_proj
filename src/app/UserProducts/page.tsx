"use client";
import { Modal } from "@/components/Modals/Modal";
import Pagination from "@/components/Pagination";
import Products from "@/components/Products";
import TextBox from "@/components/elements/TextBox";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import plus from "#/images/plus.svg";
import { AddProductModal } from "@/components/Modals/AddProductModal";
import { headers } from "next/dist/client/components/headers";

export default function userProducts() {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

  const deleteItem = async (pid: string) => {
    const res = await fetch(`/api/products/${pid}`,{
      method: "DELETE",
      headers: {
        "accessToken" : String(session?.user.accessToken)
      }
    }
    )
    setConfirmationModal(false)
    return
    
  };

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
     
      }
    };

    fetchProducts(session?.user._id);
  }, [session]);

 

  // Get current posts
  const lastProductIdx = currentPage * productsPerPage;
  const firstProductIdx = lastProductIdx - productsPerPage;
  const currentProducts: any =
    Array.isArray(products) && products?.slice(firstProductIdx, lastProductIdx);

  return (
    <div>
      <div className="mt-[-54px] flex items-center justify-center w-full">
        <div>
          <TextBox placeholder="Filter by Category" className="h-[72px]" />
        </div>
      </div>
      <div className="mt-12">
        <Products
          confirmationModal={confirmationModal}
          onClose={() => setConfirmationModal(false)}
          onOpen={() => setConfirmationModal(true)}
          products={currentProducts}
          loading={loading}
          deleteItem={(pid: string) => deleteItem(pid)}
        />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={(num: number) => setCurrentPage(num)}
          currentPage={currentPage}
        />
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-5 right-[-30px] flex items-center w-36 p-3 justify-center rounded-full "
      >
        <Image
          className=" shadow-md shadow-prime-violet rounded-full "
          src={plus}
          width={50}
          height={50}
          alt="Icon"
        />
      </button>

      <AddProductModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        userSess={session?.user}
      />
    </div>
  );
}
