import React from "react";
import Product from "./product";

class Products extends React.Component {
    state = {
        data: [
          {
            id: 1,
            title:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quasi ipsam accusamus ducimus rem libero illum itaque, perferendis sint ratione?",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/91XB8c9CzSL._AC_SX425_.jpg",
          },
          {
            id: 2,
            title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quasi ipsam accusamus ducimus rem libero illum itaque, perferendis sint ratione?",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/91XB8c9CzSL._AC_SX425_.jpg",
          },
          {
            id: 3,
            title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quasi ipsam accusamus ducimus rem libero illum itaque, perferendis sint ratione?",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/91XB8c9CzSL._AC_SX425_.jpg",
          },
          {
            id: 4,
            title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quasi ipsam accusamus ducimus rem libero illum itaque, perferendis sint ratione?",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/91XB8c9CzSL._AC_SX425_.jpg",
          },
        ],
      };
  render() {
    return (
      <div className="main-products">
        <Product products={this.state.data} />
      </div>
    );
  }
}
export default Products;
