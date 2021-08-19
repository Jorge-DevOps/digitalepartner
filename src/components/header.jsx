import React from "react";
import "../styles/style.css/style.css";

import {FiShoppingCart} from "react-icons/fi";
import {FaUserTie} from "react-icons/fa";
import {FaWheelchair} from 'react-icons/fa'
import { FiSearch } from "react-icons/fi";
import { FaHeartbeat } from "react-icons/fa";
import { RiHandSanitizerLine } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container-header">
          <img
            className="container-header__logo"
            src="https://www.catalogodelasalud.com/backend/imagenes/5447508/logo-impormedical.jpg  "
            alt=""
          />
          <div className="container-header__input">
            <input
              type="text"
              name=""
              className="header-input"
              placeholder="¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ"
            />
            <div className="container-header__search">
              <a href="">
                <FiSearch size={25} />
              </a>
            </div>
          </div>
          <ul className="header-list">
            <li className="header-list__item">
              <a href="" className="header-list__link pedidos">
                MIS PEDIDOS
              </a>
            </li>
            <li className="header-list__item">
              <a href="" className="header-list__link">
                HOLA ALIAD@
                <br />
                INGRESA
              </a>
            </li>
            <li className="header-list__item ">
              <a href="" className=" header-list__link ">
                <p>0</p>
                <FiShoppingCart size={30}  />  
                <p>CARRITO</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="header-icon">
            <a href="" className="list_nav__link">
              <HiOutlineMenuAlt2 size={30} />
            </a>
          </div>
          <div>
            <ul className="list_nav">
              <li className="list_nav__items">
                <a href="" className="list_nav__link">
                  <FaWheelchair size={25} />
                  <p>MOVILIDAD</p>
                </a>
              </li>
              <li className="list_nav__items">
                <a href="" className="list_nav__link">
                  <FaHeartbeat size={25} />
                  <p>CUIDADO EN EL HOGAR</p>
                </a>
              </li>
              <li className="list_nav__items">
                <a href="" className="list_nav__link">
                  <FaUserTie size={25} />
                  <p> PROFESIONALES DE LA SALUD</p>
                </a>
              </li>
              <li className="list_nav__items">
                <a href="" className="list_nav__link">
                  <RiHandSanitizerLine size={25} />
                  <p>TAPABOCAS Y DESINFECCION</p>
                </a>
              </li>
               
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
