"use client";

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
import { ToastContainer, toast } from "react-toastify";

export default function userProducts() {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

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
    const filteredProducts = products.filter((product: any) => {
      if (filterValue === "All") {
        return true;
      }
      return product.category === filterValue;
    });
  
    if (searchQuery !== "") {
      const filteredByName = filteredProducts.filter((product: any) => {
        const productName = product.title.toLowerCase();
        const query = searchQuery.toLowerCase();
        return productName.includes(query);
      });
      setFilteredProducts(filteredByName);
    } else {
      setFilteredProducts(filteredProducts);
    }
  };
  

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    const filteredByName = currentProducts.filter((product: any) => {
      const productName = product.title.toLowerCase();
      const query = searchQuery.toLowerCase();
      return productName.includes(query);
    });

    setFilteredProducts(filteredByName);
  };

  const deleteItem = async (pid: string) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
      headers: {
        accessToken: String(session?.user.accessToken),
      },
    });
    if(res.status === 202){
      toast.info('Item deleted!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
    }
  };

  const updateItem = async (uid: string, updatedProduct: any) => {
    const res = await fetch(`/api/products/${uid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        accessToken: String(session?.user.accessToken),
      },
      body: JSON.stringify(updatedProduct),
    });
    if(res.status === 202){
      toast.info('Item updated!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
    }
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
  }, [session, deleteItem, updateItem]);

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
            type="search"
            placeholder="Filter by Name"
            className={
              "h-[72px] w-full focus:shadow focus:shadow-prime-violet "
            }
            value={searchQuery}
            onChange={handleSearch}
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
          updateProduct={(uid: string, updatedProduct: any) =>
            updateItem(uid, updatedProduct)
          }
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
        className="transition-all duration-200 fixed bottom-5 lg:right-0 right-[-30px] flex items-center w-36 p-3 justify-center rounded-full active:rotate-90 active:scale-[95%] hover:scale-105"
      >
        <Image
          className=" shadow-md shadow-prime-violet rounded-full hover"
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
