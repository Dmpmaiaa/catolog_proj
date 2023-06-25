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
import ConfirmationModal from "@/components/Modals/ConfirmationModal";
import EditModal from "@/components/Modals/EditModal";

export default function userProducts() {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const openConfirmationModal = (pid: string) => {
    setSelectedItem(pid);
    setConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };

  const handleDeleteItem = () => {
    deleteItem(selectedItem);
    closeConfirmationModal();
  };


  const [editModal, setEditModal] = useState("");

  const deleteItem = async (pid: string) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
      headers: {
        accessToken: String(session?.user.accessToken),
      },
    });
    return;
  };

  useEffect(() => {
    const fetchProducts = async (uid: number | undefined) => {
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
  }, [session, deleteItem]);

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
          products={currentProducts}
          deleteItem={(pid: string) => deleteItem(pid)}
          onOpen={openConfirmationModal}
          onClose={closeConfirmationModal}
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

      <ConfirmationModal
        isVisible={isConfirmationModalOpen}
        onClose={closeConfirmationModal}
        deleteItem={handleDeleteItem}
      />

     {/*  <EditModal /> */}

    </div>
  );
}
