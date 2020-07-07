import React from "react";
import Header from "./Header";
import ListSmartphone from "./ListSmartphone";
import Promotion from "./Promotion";
import Carousel from "./Carousel";


export default function Baitap3(){
    return(
        <div className="bg-dark">
            <Header/>
            <Carousel/>
            <ListSmartphone/>
            <Promotion/>
        </div>
    )
}