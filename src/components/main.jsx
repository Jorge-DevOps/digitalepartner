import React from "react";
import "../styles/style.css/style.css";
import Categories from "./categories";

class Main extends React.Component {
  state = {
    data: [
    {
      id: 1,
      title: "Seguridad en el baño",
      image:
        "https://impormedical.com.co/images/categorias/MOVILIDAD2-1920X580.jpg",
    },
    {
      id: 2,
      title: "Tapabocas",
      image:
        "https://impormedical.com.co/images/virtuemart/category/CONFORT_1920X580.jpg",
    },
    {
      id: 3,
      title: "Silla de ruedas",
      image:
        "https://impormedical.com.co/images/categorias/profesionalesalud.jpg",
    },
    {
      id: 4,
      title: "Ayudas para la marcha",
      image:
        "https://impormedical.com.co/images/categorias/MOVILIDAD2-1920X580.jpg",
      }
    ],
  };
  render() {
    return (
      <main className="container-main">
        <div className="main-banner">
        <p className="main-title">
          <span>MÁS</span> DE <br /> 800 MIL <br />
          FAMILIAS
          <br /> HABILITADAS
        </p>
        <a className="main-button">Ver productos</a>
        </div>
        <div className="mainCategories" >
          <Categories categories={this.state.data} />
        </div>
      </main>
    );
  }
}
export default Main;
