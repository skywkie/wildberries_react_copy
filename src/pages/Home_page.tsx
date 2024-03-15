import React from "react";
import ListItems from "../components/ListItems";
import Swiper from "../components/Swiper";
import Footer from "../components/Footer";

const Home_page = () => {
   return (
      <>
         <div>Header</div>
         <Swiper />
         <ListItems />
         <Footer />
      </>
   );
};

export default Home_page;
