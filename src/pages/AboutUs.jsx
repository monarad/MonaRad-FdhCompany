
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img1 from '../images/one.JPG'; // مسیر تصویر اول

import img2 from '../images/two.JPG';
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Icon from "@mui/material/Icon";
const slides = [img1, img2];

function AboutUs() {
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextSlide = () => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
   };

   const prevSlide = () => {
     setCurrentIndex(
       (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
     );
   };
  
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100vw", // تغییر عرض به 100vw
          overflow: "hidden",
        }}
      >
                   {" "}
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s",
            transform: `translateX(-${currentIndex * 100}%)`, // اصلاح این خط
          }}
        >
                         {" "}
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "100%",
                padding: "16px",
                backgroundColor: "#f0f0f0",
                textAlign: "center",
              }}
            >
                                     {" "}
              <img
                src={slide}
                alt={`Slide ${index}`}
                style={{ width: "100%", height: "auto" }}
              />
                                 {" "}
            </Box>
          ))}
                     {" "}
        </Box>
                   {" "}
        <Button
          onClick={prevSlide}
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
                          <ArrowBackIcon />
                     {" "}
        </Button>
                   {" "}
        <Button
          onClick={nextSlide}
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
                          <ArrowForwardIcon />
                     {" "}
        </Button>
               {" "}
      </Box>
      <div className="bg-white   my-20 align-middle justify-center ">
        <div className="bg-white h-80 mb-60 mx-auto ml-16 mr-16 text-center ">
          پروژه های CNC 10 سال پیش با هدف دسترسی بیشتر به تولید CNC برای مردم از
          همه صنایع آغاز شد. ما نیاز به یک فرآیند ساخت قابل دسترسی تر و شخصی را
          دیدیم و با تیم مناسب پشت سرمان توانستیم این را ارائه دهیم. تیم ما از
          زمانی که درهای خود را 10 سال پیش باز کردیم، رشد کرده است. ما اکنون 5
          کارمند تمام وقت و 2 عضو آزاد داریم. با داشتن سابقه ای در کابینت، طراحی
          مبلمان و طراحی محصول، همه ما برای علاقه خود به تولید گرد هم آمده ایم.
          در مجموع بیش از 40 سال تجربه داریم و به طور مداوم با معرفی فناوری های
          جدید به آن اضافه می کنیم. ما پایگاه خود را در لندن حفظ کرده‌ایم تا به
          راحتی در دسترس باشد و مشتریان خود را قادر می‌سازد تا در پروژه‌های
          آینده صحبت کنند. اگر مایل به رزرو جلسه هستید، لطفا همین امروز تماس
          بگیرید.
        </div>
        <div className=" flex bg-yellow-400 h-44 mb-5">
          <div className="w-1/2 ml-20 mt-10 text-white">
            <AccessAlarmIcon style={{ fontSize: "3rem" }}>
              {/* <Icon style={{ fontSize: "900px" }}></Icon> */}
            </AccessAlarmIcon>
          </div>
          <div className="w-1/2 mt-10 text-white">
            <LocationCityIcon  style={{ fontSize: "3rem"}}></LocationCityIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs