import React from "react";
import NavBar from "./NavBar";
import NykaCarousel from "./NykaCarousel";
import { Spinner } from "react-bootstrap";
import BrandList from "./BrandList";
import NykaaSections from "./NykaSections";
import FollowUs from "./FollowUS";
import NykaFooter from "./NykaFooter";
import NykaCard from "./NykaCard";
import LuxuryBeauty from "./LuxuryBeauty";
import BrandMarquee from "../Common/BranadMarquee";
import ShowProduct from "./ShowProduct";

const Home = () => {
  return (
    <>
      <NavBar />
      <NykaCarousel />
      <BrandMarquee />
      <ShowProduct/>
      <LuxuryBeauty />
      <NykaCard />
      {/* <NykaCard /> */}
      <BrandList />
      <NykaaSections />
      <NykaaSections />
      <FollowUs />
      <NykaFooter />
    </>
  );
};

export default Home;
