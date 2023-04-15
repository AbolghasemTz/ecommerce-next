import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-6">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            فروشگاه
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                          هدیه
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            ثبت نام 
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                           ارسال نظرات 
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                        تخفیف دانشجویی
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                               کمک بگیر
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                              وضعیت سفارش
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                               تحویل
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                               برگشت کالا
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                            گزینه های پرداخت
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                               تماس با ما
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-sm">
                               درباره نایک
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                               خبر ها
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                               مشاغل
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                سرمایه گذاران
                            </div>
                            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                پایداری
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaFacebookF size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaTwitter size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
           
        </footer>
    );
};

export default Footer;