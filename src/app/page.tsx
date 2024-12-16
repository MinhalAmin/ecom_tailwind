"use client"; // Declare this is a client component

import Image from "next/image"
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Home() {

  const router = useRouter(); // Initialize router

  const handleBack = () => {
    router.back(); // Navigate to the previous page
  };

  const handleShopNow = () => {
    router.push("/shop"); // Navigate to the shop page
  };

  return (
    <div className="bg-white max-w-screen-2xl mx-auto">
     <h1 className="text-black font-serif text-center font-extrabold text-2xl tracking-tighter">
      Welcome To Luxurious Lavender</h1>
      <p className="text-black font-sans text-center font-thin text-xs "
      >Business known for its luxurious lavender fragrances.</p>
      <Image className="grid justify-self-center pt-4"
            width="1000"
            height="0"
            src="/bigper.JPG"
            alt="perfumes"
          />
          <h2 className="text-black pt-5 font-sans text-center font-medium text-xs">LOOK AT</h2>
          <h3 className="text-black text-center font-sans font-bold -tracking-tighter text-2xl">
            Our Fragrance Frenzy Collection..!</h3>
            <p className="text-black font-sans text-center font-thin text-xs pt-1">
              Elevate your presence with refined fragrance...</p> 

              <div className="flex justify-between ">
            <h4 className="text-black font-sans font-medium tracking-tighter text-lg  pl-40 pt-10">
              Best oF Fregrance Frenzy</h4>

              {/* Back and Shop Buttons */}
              <div className=" pt-8  px-40">
              <button
          onClick={handleShopNow}
          className="px-6 py-3 text-xs font-normal text-white bg-black rounded-full 
           hover:bg-gray-800 transition"
           >
          Shop Now
           </button>
           </div>
           </div>

              <div className="grid grid-cols-4 justify-self-center gap-12 pt-2">
              <Image className=" pt-4"
            width="200"
            height="100"
            src="/ysl.JPG"
            alt="perfumes"/>
            <Image className="pt-4"
            width="200"
            height="0"
            src="/chanel.JPG"
            alt="perfumes"/>
            <Image className="pt-4"
            width="200"
            height="0"
            src="/perfume3.JPG"
            alt="perfumes"/>
            <Image className="pt-4"
            width="200"
            height="0"
            src="/perfume4.JPG"
            alt="perfumes"/>
              </div>
              <div className="grid grid-cols-4 justify-self-center
               text-black font-extralight text-xs gap-14 pl-40 pr-40 pt-2">
              <p>Yves Saint Laurent Libre Intense Eau De Parfum For Women, 90ml</p>
              <p>Chanel Coco Mademoiselle Eau De Parfum Spray For Women 100ml</p>
              <p>Juicy Couture Viva La Juicy Rosé EdP 50 ml</p>
              <p>Lady Vengeance Juliette Has A Gun, 90ml</p>
              </div>
              <div className="grid grid-cols-4 justify-self-center
               text-black font-bold text-sm gap-52 pl-40 pr-40">
                <h1>$170.00</h1>
                <h2>$202.50</h2>
                <h3>$79.05</h3>
                <h4>$47</h4>
              </div>
              <h1 className="text-black font-sans font-extrabold tracking-wide text-xl pl-48 pt-10">
                CLASSY
              </h1>
              <Image className="grid justify-self-center pt-2"
            width="880"
            height="0"
            src="/classy.JPG"
            alt="perfumes"
          />
          <h3 className="text-black text-center font-sans font-bold tracking-tight pt-7 text-2xl">
          "Unleash your inner allure"</h3>
          <p className="text-black font-sans text-center font-thin text-xs ">
            The scent that guarantees a standing ovation</p>
            <div className="flex justify-center items-center pt-7">
            <button
          onClick={handleShopNow}
          className="px-6 py-3 text-medium font-bold text-white bg-black rounded-full 
           hover:bg-gray-800 transition "
           >
          Shop Now
           </button>
           </div>
           <h1 className="text-black text-center font-sans font-extrabold tracking-tight pt-14 text-2xl">
            Don't Miss Out</h1>
           <div className="flex justify-self-center gap-96 pt-7">
              <h1 className="text-black font-sans font-bold tracking-tighter text-lg">
                For Mens</h1>
                <h1 className="text-black font-sans font-bold tracking-tighter text-lg">
                For Womens</h1>
                </div>
                <div className="flex justify-center gap-14">
                <div className="grid grid-cols-2 gap-5">
                <Image className="pt-4"
            width="200"
            height="0"
            src="/men2.jpg"
            alt="perfumes"/>
            <Image className="pt-4"
            width="200"
            height="0"
            src="/men1.jpg"
            alt="perfumes"/>
            </div>
                <div className="grid grid-cols-2 gap-5">
                <Image className="pt-4"
            width="200"
            height="0"
            src="/women2.jpg"
            alt="perfumes"/>
            <Image className="pt-4"
            width="200"
            height="0"
            src="/women1.jpg"
            alt="perfumes"/>
            </div>
           </div>
    </div>
  );
}

