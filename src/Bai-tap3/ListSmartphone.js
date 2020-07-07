import React from "react";
import ItemSmartphone from "./ItemSmartphone";
export default function ListSmartphone() {
    return (
        <div>
            <section id="smartphone" className="container-fluid pt-5 pb-5">
                <h1 class="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <ItemSmartphone />
                    <ItemSmartphone />
                    <ItemSmartphone />
                    <ItemSmartphone />
                </div>
            </section>
        </div>
    );
}