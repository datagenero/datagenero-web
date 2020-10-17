import React from "react";
import "./home-content.scss";
import logo from "../../assets/button.png"
import orga1 from "../../assets/orgas/lasDeSist.png"
import orga2 from "../../assets/orgas/metcba.png"
import orga3 from "../../assets/orgas/rladies.png"
import orga4 from "../../assets/orgas/wbio.png"
import orga5 from "../../assets/orgas/wim.png"

const HomeContent = () => {
  return (
    <div className="home-content-container">
      <div className="home-content">
        <div className='description-wrapper'>
          <img
            className="home-content-image"
            src={logo} alt="logo"
          />
          <p className="home-content-description">
            El Observatorio tiene como objetivos sistematizar y compartir los procesos integrales de producción de datos con perspectiva de género, disponibilizar datos y articular entre diversos actores de la sociedad para poder realizar análisis y comunicaciones responsables, que puedan colaborar a la resolución de diversas poblemáticas que afectan a mujeres y personas LGBTIQ+.
        </p>
        </div>

        <div className="aliadxs">
          <p className="orgas-title">ORGANIZACIONES ALIADAS</p>
          <div className="orgas-wrapper">
            <a href="https://lasdesistemas.org/"><img className="orga 1" src={orga1} alt="" /></a>
            <a href="https://mujeresentecnologia.org/"><img className="orga 2" src={orga2} alt="" /></a>
            <a href="https://twitter.com/rladies_rciacte"><img className="orga 3" src={orga3} alt="" /></a>
            <a href="https://twitter.com/bioinfola"><img className="orga 4" src={orga4} alt="" /></a>
            <a href="http://wimlds.org/"><img className="orga 5" src={orga5} alt="" /></a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeContent;
