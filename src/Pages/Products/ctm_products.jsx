import React from "react";
import "./AssetmanagementProducts.css";
import "./ctm_products.css"
import ReportingTool from "../../images/reporting tool.png"
import Navbar from "../../components/Navbar/Navbar";
import ContactUsBg from "../../images/contactus_bg.png";
import Footer from "../../components/Footer/Footer";
import CellTowerMangImage from "../../images/Group 1000001254.png";
import TaskBetaImage from "../../images/Group 1000001256.png";
import ReportingToolImage from "../../images/Group 1000001255.png";
import DeliverEzImage from "../../images/Group 1000001257.png";
import one from "../../images/Group 1000001253.png";
import two from "../../images/Group 1000001253-1.png";
import three from "../../images/Group 1000001253-2.png";





function ProductsBody1(body1){
    return(
        <>
            <h1 class="product_individual_product">{body1.productname}</h1>
            <p class="product_individual_productdescription headdd">{body1.productdescription}</p>
            <p class="product_individual_productdescription1 desss">{body1.productdescription1}</p>
            <img class="product_individual_productimage" src={body1.productimage} alt="" />
            <div className="knowmorebutton btnnn"><button class="products_knowmore"><p className="knowmoretext">Know More</p></button></div> 
        </>
    );
    
}
function ProductsBody2(body2){
    return(
        <>
            <p class="product_individual_productdescription_body2">{body2.productdescription}</p>
            <video class="body2_video" src={body2.video}></video>
        </>
    );
    
}

function ProductsBody3(body3){
    return(
        <>
            <p class="product_individual_features_text">{body3.productfeaturestext}</p>
            <p class="product_individual_features_description">{body3.productfeaturesdescription}</p>
            <div className="features_cards">
                <img class="product_individual_features_card_image" src={body3.featuresimage} alt="" />
                <p class="product_individual_features_card_name">{body3.productfeaturesname}</p>
                <p class="product_individual_features_card_name_description">{body3.productfeaturesnamedescription}</p>
            </div>
            
        </>
    );
    
}

function ProductsBody4(body4){
    return(
        <>
            <p class="product_individual_moreproducts_text">{body4.productfeaturestext}</p>
            <p class="product_individual_moreproducts_description">{body4.productfeaturesdescription}</p>
            <div className="moreproducts_cards">
                <img class="product_individual_moreproducts_card_image" src={body4.moreproductsimage} alt="" />
                <p class="product_individual_moreproducts_card_name">{body4.moreproductsname}</p>
                
            </div>
            
        </>
    );
    
}

const TaskTickerManagementProducts = () =>{
   return(
        <div class="AssetmanagementProducts_body">
            <div >
                <Navbar />
            </div>
            <div class="AssetmanagementProducts_body1">
                <ProductsBody1 productimage={ReportingTool} productname="CTM- Cell Tower Management" productdescription="A Holistic Solution to Remote Cell Tower Management" productdescription1="Monitor, Manage and Access Control of Remote Towers with utmost convenience." />
            </div>
            <div className="AssetmanagementProducts_body2">
                <ProductsBody2 productdescription="Here’s an introductory video to better exemplify the features,
advantages and the proper use case of the product." video='' /> 
            </div>
            <div className="AssetmanagementProducts_body3">
                <ProductsBody3  productfeaturestext="Features" productfeaturesdescription="These are the key features to familiarize you with the most
important aspects of the product." />
            </div>
            <div className="products_individual_features_cards">
                <div className="products_individual_features_card1">
                    <ProductsBody3 featuresimage={one} productfeaturesname="Manage Assets from Centralized Locations" productfeaturesnamedescription="An infrastructure to monitor, manage and control their assets distributed
over a wide geography." />
                </div>
                <div className="products_individual_features_card2">
                    <ProductsBody3 featuresimage={two} productfeaturesname="Reduced Operation Expenses" productfeaturesnamedescription="Remote cell tower management can be an expensive affair but we offer end
to end solutions at a cost-effective price." />
                </div>
                <div className="products_individual_features_card3">
                    <ProductsBody3 featuresimage={three} productfeaturesname="Holistic Tower Management Solutions" productfeaturesnamedescription="Experience the benefits of an easy setup, a full view inventory and a smart phone
enabled Route Management System for Drivers." />
                </div>
            </div>
            <div className="AssetmanagementProducts_body4">
                <ProductsBody4 productfeaturestext="More products" productfeaturesdescription="Now that we have already got your attention, you can further explore some
other marvels created by us." />
                <hr class="moreproducts_line" />
                <div className="moreproducts_card1">
                    <ProductsBody4 moreproductsimage={CellTowerMangImage} moreproductsname="CTM - Cell Tower Management" />
                </div>
                <div className="moreproducts_card2">
                    <ProductsBody4 moreproductsimage={TaskBetaImage} moreproductsname="Task Beta " />
                </div>
                <div className="moreproducts_card3">
                    <ProductsBody4 moreproductsimage={ReportingToolImage} moreproductsname="Reporting Tool" />
                </div>
                <div className="moreproducts_card4">
                    <ProductsBody4 moreproductsimage={DeliverEzImage} moreproductsname="DeliverEz" />
                </div>

            </div>
            
            <div class="products_individual_footer">
                <Footer />
            </div>
                
        </div>
    )
}
export default TaskTickerManagementProducts