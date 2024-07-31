import React from "react";

function Home() {

    return(
        <div>
            <div className="add-to-cart">
                <img src="https://cdn-icons-png.flaticon.com/512/8764/8764182.png" alt="" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://pngimg.com/uploads/phone_hand/phone_hand_PNG79.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone 15
                    </span>
                    <span>
                        Price: $2000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home