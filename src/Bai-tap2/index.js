import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Contact from "./Contact";
import WhatWeDo from "./WhatWeDo";
import ListCard from "./ListCard";
import Footer from "./Footer";

export default function Baitap2(){
    return (
        <div>
            <Header/>
            <Carousel/>
            <div className="container">
                <div className="row">
                <WhatWeDo/>
                <Contact/>
                </div>
            </div>
            <div className="container">
                <ListCard/>
            </div>
            <Footer/>
        </div>
    )
}