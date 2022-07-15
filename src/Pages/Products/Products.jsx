import React from 'react';
import "./Products.css";

function ProductsBody1(body1){
    return(
        <>
            <h1 class="product_individual_product">{body1.productname}</h1>
            <p class="product_individual_productdescription">{body1.productdescription}</p>
            <p class="product_individual_productdescription1">{body1.productdescription1}</p>
            <button class="products_knowmore">Know More</button>
        </>
    );
    
}

const Products = () =>{
    return(
        <div class="products_body">
            <div >

            </div>
            <div class="products_body1">
                <p class="productname_heading"><ProductsBody1 productname="hello"  /></p>
                
            </div>
        </div>
    )
}
export default Products