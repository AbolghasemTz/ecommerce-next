import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/Bi";
import MobileMenu from "./MobileMenu";
import { getCategory } from "../utils/api";
import { useSelector } from 'react-redux';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrolly, setLastScrolly] = useState(0);
  const [categories,setCategories] = useState(null)
  const {cartItems} = useSelector(state => state.cart) 


  const controlNavbar = () => {
    if(window.scrollY > 200) {
      if(window.scrollY > lastScrolly){
        
        setShow("-translate-y-[80px]")
      }
    }else{
      setShow("translate-y-0")
    }
  }

  useEffect(() => {
   window.addEventListener('scroll',controlNavbar)
   return () => {
    window.removeEventListener('scroll',controlNavbar)
   }
  },[lastScrolly])

  useEffect(() => {
   fetchCategoryData()
  },[])

  const fetchCategoryData = async () => {
    const {data} = await getCategory();
    setCategories(data)
  }

  return (
    <header
      className={`w-full h-[70px] md:[100px] bg-white flex items-center justify-between z-20 sticky 
  top-0 transition-transform duration-300 shadow-md ${show}
  `}
    >
      <Wrapper className="flex h-[60px] justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="LOGO" width={50} height={50} />
        </Link>

        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} categories={categories}/>
        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}
        <div className="flex items-center gap-2 text-black">
          {/* icon start */}
          <div
            className="w-8 md:w-12 h-8  md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.5]\
           cursor-pointer relative"
          >
            <IoMdHeartEmpty className="text-[19px] md:text-[24]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5
          md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]
          "
            >
              3
            </div>
          </div>
          {/* icon end */}

          {/* icon start */}
          <div
            className="w-8 md:w-12 h-8  md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.5]\
           cursor-pointer relative"
          >
          <Link href="/cart">
          <BsCart className="text-[15px] md:text-[20]" />
          </Link>
          {cartItems.length > 0 &&  <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5
          md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]
          "
            >
              {cartItems.length}
            </div>}
          
          </div>
          {/* icon end */}

          {/* Mobile Icon start */}

          <div
            className="md:hidden w-8 md:w-12 h-8  md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.5]\
           cursor-pointer relative mr-2"
          >
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>

          {/* Mobile Icon End */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
