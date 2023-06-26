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
import ConfirmationModal from "@/components/Modals/ConfirmationModal";
import { FilterDropdown } from "@/components/elements/FilterDropdown";

export default function userProducts() {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const openConfirmationModal = (type: string, pid: string) => {
    setSelectedItem(pid);

    if (type === "confirmation") {
      setConfirmationModalOpen(true);
    } else if ((type = "edit")) {
      setIsUpdating(true);
    }
  };

  const closeConfirmationModal = () => {
    setConfirmationModalOpen(false);
    setIsUpdating(false);
  };

  const handleDeleteItem = () => {
    deleteItem(selectedItem);
    closeConfirmationModal();
  };

  const onFilterValueSelected = (filterValue: string | number) => {
    let filteredProducts = currentProducts.filter((el: any) => {
      if (filterValue === "All") {
        return el;
      }
      return el.category === filterValue;
    });
    setFilteredProducts(filteredProducts);
  };

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

  const [filteredProducts, setFilteredProducts] = useState([]);
  // Get current posts
  const lastProductIdx = currentPage * productsPerPage;
  const firstProductIdx = lastProductIdx - productsPerPage;
  const currentProducts: any =
    Array.isArray(products) && products?.slice(firstProductIdx, lastProductIdx);

  return (
    <div>
      <div className="mt-[-35px] flex items-center justify-center w-full">
        <div className="flex gap-1 lg:w-2/3 lg:justify-center  bg-white rounded-md ">
          <TextBox
            placeholder="Filter by Category"
            className={"h-[72px] w-full focus:shadow focus:shadow-prime-violet "}
          />
          <FilterDropdown
            // Pass all unique categories down to filter dropdown
            products={products
              .map((el: any) => el.category)
              .filter(
                (value: any, index: any, array: any) =>
                  array.indexOf(value) === index
              )}
            filterValueSelected={onFilterValueSelected}
          />
        </div>
      </div>
      <div className="mt-10 w-full lg:flex lg:flex-col justify-center items-center">
        <Products
          products={
            filteredProducts.length > 0 ? filteredProducts : currentProducts
          }
          deleteItem={(pid: string) => deleteItem(pid)}
          onOpen={openConfirmationModal}
          onClose={closeConfirmationModal}
        />

        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={
            filteredProducts.length > 0
              ? filteredProducts.length
              : products.length
          }
          paginate={(num: number) => setCurrentPage(num)}
          currentPage={currentPage}
        />
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-5 lg:right-0 right-[-30px] flex items-center w-36 p-3 justify-center rounded-full "
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
    </div>
  );
}
