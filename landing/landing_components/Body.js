import React from "react";

export default function Body() {
    return (
        <div className="order-here">
        
            <div className="text">
                Order Here...
            </div>
            
            <button className="menu-button" onClick={() => {console.log("bsdk")}}>
                <div className="button-container">Menu</div>
            </button>
            
        </div>
    
    );
}