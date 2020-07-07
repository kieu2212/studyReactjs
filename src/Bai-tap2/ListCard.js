import React from "react";
import ItemCard from "./ItemCard";
export default function ListCard(){
    return(
        <div className="row">
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </div>
        
    )
}