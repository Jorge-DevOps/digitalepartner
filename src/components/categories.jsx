import React from "react";
import "../styles/style.css/style.css";
import { FaWheelchair } from "react-icons/fa";

class Categories extends React.Component {
  render() {
    return (
      <article className="categories-list">
        {this.props.categories.map((category) => {
          return (
            <div className="categories-item" key={category.id}>
              <div className="categories-item__div">
                <a href="">
                  <FaWheelchair size={120} />
                </a>
              </div>
              <img
                src={category.image}
                alt=""
                className="categories-item__img"
              />
              <p className="categories-item__title">{category.title}</p>
            </div>
          );
        })}
      </article>
    );
  }
}
export default Categories;
