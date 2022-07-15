import React from "react";
import "./AssetmanagementProducts.css";
import "./task_products.css"
import TASK from "../../images/TASK.png";
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
import AssetmanagementImage from "../../images/Asset Management.png";




function ProductsBody1(body1){
    return(
        <>
            <h1 class="product_individual_product t1">{body1.productname}</h1>
            <p class="product_individual_productdescription taskH">{body1.productdescription}</p>
            <p class="product_individual_productdescription1 taskD">{body1.productdescription1}</p>
            <img class="product_individual_productimage t4" src={body1.productimage} alt="" />
            <div className="knowmorebutton taskB"><button class="products_knowmore"><p className="knowmoretext">Know More</p></button></div> 
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
    <div className="totalBody">
        <div class="AssetmanagementProducts_body">
            <div >
                <Navbar />
            </div>
            <div class="AssetmanagementProducts_body1">
                <ProductsBody1 productimage={TASK} productname="TASK Ticket Management System" productdescription="Be the Pioneer of Agile Software Development Industry" productdescription1="A Simple project and source-code management tool designed for the ease of Developer, Manager and Administrator." />
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
                    <ProductsBody3 featuresimage={one} productfeaturesname="Manage Projects and Source-codes" productfeaturesnamedescription="Have a full view of all the tickets under a project. Create new or update existing tickets. Manage bugs and issues related to applications under development" />
                </div>
                <div className="products_individual_features_card2">
                    <ProductsBody3 featuresimage={two} productfeaturesname="Manage Milestones" productfeaturesnamedescription="Track milestones, measure growth and easily compare the actual and ideal burndown
for milestones." />
                </div>
                <div className="products_individual_features_card3">
                    <ProductsBody3 featuresimage={three} productfeaturesname="Time-Tracking" productfeaturesnamedescription="Trace your growth on the basis of time spent or time scheduled and come up with an
improved course of action.
" />
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
        </div>
    )
}
export default TaskTickerManagementProducts