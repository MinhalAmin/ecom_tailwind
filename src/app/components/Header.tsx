"use client"; 
import Link from "next/link";
import Image from "next/image"

import { useState } from "react";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa"; // Importing search, cart, and heart icons

const Header = () => {
  const [query, setQuery] = useState<string>(""); // State for storing the search query
  const [isFocused, setIsFocused] = useState<boolean>(false); // State for managing focus state of the input field
  const [cartCount, setCartCount] = useState<number>(0); // State for cart items count
  const [wishlistCount, setWishlistCount] = useState<number>(0); // State for wishlist items count

  // Handle changes to the search input field
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Handle the form submission for search
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search submitted:", query); // You can replace this with actual search logic
  };

  // Handle adding/removing items to/from the cart
  const toggleCart = () => {
    setCartCount(cartCount === 0 ? 1 : 0); // Toggle cart count (add or remove item)
  };

  // Handle adding/removing items to/from the wishlist
  const toggleWishlist = () => {
    setWishlistCount(wishlistCount === 0 ? 1 : 0); // Toggle wishlist count (add or remove item)
  };
  
    return (
      <header
        className="text-black  bg-slate-200 max-w-screen-2xl mx-auto"
      >
        <div className=" bg-white py-3 pl-7 flex ">
        {/* Logo */}
        <Image className=""
            width="50"
            height="50"
            src="/perfume1.png"
            alt="Logo"
          />
        
     <nav className=" py-3 pl-64 font-semibold font-sans text-base hover:text-slate-500
      transition-colors duration-300">
          <ul
            className=" space-x-5  md:flex lg:flex xl:flex 2xl:flex
            "
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/new">New & Refreshing</Link>
            </li>
            <li>
              <Link href="/#">For Men & Women</Link>
            </li>
          </ul>
        </nav>

        
        <div className="pr-28 pl-16 md:items-center">
        {/* Search Bar */}
        <form 
          onSubmit={handleSearchSubmit}
          className="relative flex items-center w-full"
        >
          {/* Search Input Field */}
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            onFocus={() => setIsFocused(true)}  // Set focus state
            onBlur={() => setIsFocused(false)}  // Reset focus state
            placeholder="Search"
            className={`w-full py-2 pl-10 pr-4 rounded-full border transition-all ease-in-out duration-300 ${
              isFocused ? "w-72" : "w-64"
            } border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {/* Search Icon */}
          <FaSearch className="absolute left-3 text-gray-500" />
        </form>
        </div>

        <div className="flex pt-3 space-x-5 ">
      {/* Cart Icon */}
      <div className="relative cursor-pointer" onClick={toggleCart}>
        <FaShoppingCart className="text-2xl text-gray-700" />
        {/* Show cart count */}
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </div>

      {/* Wishlist Icon */}
      <div className="relative cursor-pointer" onClick={toggleWishlist}>
        <FaHeart className="text-2xl text-gray-700 " />
        {/* Show wishlist count */}
        {wishlistCount > 0 && (
          <span className="absolute top-0 right-5 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </div>
    </div>
  
        </div>
        </header>
  );
}
export default Header;