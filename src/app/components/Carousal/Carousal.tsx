import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./styles.css";

const Carousal = () => {
  const images = [
    // "https://plus.unsplash.com/premium_photo-1681487557151-d15812c252ed?q=80&w=270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.pexels.com/photos/5650017/pexels-photo-5650017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://plus.unsplash.com/premium_photo-1672883552013-506440b2f11c?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://img.lazcdn.com/us/domino/72b7aa0c-648d-446d-8ad7-6bffb786fc5c_NP-1976-688.jpg_1200x1200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/1bf033bb-3127-4a5d-9bdc-d5aa5a0f6a3f_NP-1976-688.jpg_1200x1200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/9ff52f9b574ef5f34975e231516f3cbe.jpg_1200x1200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/53bc6826-69a7-4b44-af0f-c95c3f42ce59_NP-1976-688.png_1200x1200q80.png_.webp",
    "https://img.lazcdn.com/us/domino/b9f2cce9095ec91311af8aacc284f59e.jpg_1200x1200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/bde02503-1557-45c8-a16e-cb40863bd98f_NP-1976-688.jpg_1200x1200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/d2155204-b0f4-4635-8407-fb07daced653_NP-1976-688.png_1200x1200q80.png_.webp",
    "https://img.lazcdn.com/us/domino/fbc72ffb-5989-439a-874d-1ae155b67296_NP-1976-688.jpg_1200x1200q80.jpg_.webp",
  ];

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <Image src={item} alt="images" width={500} height={500} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousal;
