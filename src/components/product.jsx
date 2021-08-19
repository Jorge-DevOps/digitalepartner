import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="container-products__cards">
        {this.props.products.map((products) => {
          return (
            <div className="products-card">
              <img src={products.image} alt="" className="products-card__img" />
              <p>{products.title}</p>
              <a href="">AÑADIR AL CARRITO</a>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Product;
