import React from "react";
import '../css/design-system.css';
import mainLogoWhite from '../images/mainlogo-white.svg';

const Footer = () => {

    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="disclamer col-lg-4 col-md-12 col-sm-12">
                        <div className="logo-container">
                            <img src={mainLogoWhite} alt="" className="log-rncefooter" />
                        </div>
                        <div className="socialnet-container">
                            <a href="https://www.facebook.com/RegistraduriaNacional/" className="socialnet facebook"></a>
                            <a href="https://twitter.com/Registraduria" className="socialnet twitter"></a>
                            <a href="https://www.youtube.com/user/RegistraduriaNal#" className="socialnet youtube"></a>
                            <a href="https://www.instagram.com/registraduria/" className="socialnet instagram"></a>
                            <a href="https://www.linkedin.com/company/registradur%C3%ADa-nacional-del-estado-civil/" className="socialnet linkedin"></a>
                            <a href="https://www.linkedin.com/company/registradur%C3%ADa-nacional-del-estado-civil/" className="socialnet tiktok"></a>
                        </div>
                    </div>
                    <div className="menu-footer col-lg-4 col-md-12 col-sm-12">
                        <p className="white"><i className="fa-solid fa-location-dot"></i> Av. Calle 26 n.º 51-50, CAN, Bogotá, Colombia. CP: 111321 </p>
                        <p className="white"><i className="fa-solid fa-envelope"></i> Horario de atención correspondencia de lunes a viernes de 8:00 a. m. a 4:30 p. m. en jornada continua (Sede CAN av. calle 26 nº 51-50)</p>
                        <p className="white"><i className="fa-solid fa-phone"></i>  Conmutador: +57 (601) 220 2880</p>
                        <p className="white"><i className="fa-solid fa-clock"></i>  Centro de Atención e Información Ciudadana (CAIC): Carrera 7.ª n.º 16-49, edificio Córdoba. <br /> Horario: 8:00 a. m. a 4:00 p. m., en jornada continua </p>
                        <p className="white"><i className="fa-solid fa-copyright"></i> Copyright 2022 - Todos los derechos reservados Registraduría Nacional del Estado Civil. </p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="content-footer">
                            <div className="content-sections">
                                <a href="/Politicas-de-privacidad-y-condiciones-de-uso.html?var_mode=calcul" target="_blank"> <p className="white"> Políticas de privacidad</p></a>
                                <a href="https://correo.registraduria.gov.co/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fcorreo.registraduria.gov.co%2fowa" target="_blank"> <p className="white"> Correo institucional</p></a>
                                <a href="https://www.office.com/" target="_blank"> <p className="white"> Correo institucional (Office 365)</p></a>
                                <a href="http://translate.google.com/translate?sl=es&tl=en&u=http%3A%2F%2Fwww.registraduria.gov.co%2F" target="_blank"> <p className="white"> Translate</p></a>
                                <a href="/Politicas-de-privacidad-y-condiciones-de-uso.html?var_mode=calcul" target="_blank"> <p className="white"> Condiciones de uso</p></a>
                            </div>
                            <div className="content-sections">
                                <a href="" target="_blank"> <p className="white"> Mapa del sitio</p></a>
                                <a href="https://wsp.registraduria.gov.co/contactenos/" target="_blank"> <p className="white"> Contáctenos</p></a>
                                <a href="https://biblioteca.registraduria.gov.co/pmb/opac_css/index.php" target="_blank"> <p className="white"> Biblioteca </p></a>
                                <a href="https://intranet.registraduria.gov.co/" target="_blank"> <p className="white"> Intranet</p></a>
                            </div>
                            <div className="content-sections">
                                <a href="https://wsp.registraduria.gov.co/normatividad/" target="_blank"> <p className="white"> Normativa</p></a>
                                <a href="/-Procedimientos-150-.html?var_mode=calcul" target="_blank"> <p className="white"> Correos judiciales</p></a>
                                <a href="https://wsp.registraduria.gov.co/contacto/" target="_blank"> <p className="white"> PQRSDC</p></a>
                                <a href="/Glosario.html?var_mode=calcul" target="_blank"> <p className="white"> Glosario</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row bar-footer">
                <div className="col-6"> 
                    <p className="white">
                        Última actualización 11:39 am julio 5 de 2022
                    </p>
                </div>
                <div className="col-6">
                    <p className="white">
                        Recomendado uso de <i className="fa-brands fa-chrome"></i>  <a className="white" href="https://www.google.com/chrome/browser/desktop/index.html"><i className="icon-chrome"></i> Google Chrome </a>
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row fixed-bottom container-buttons">
                    <ul className="buttons nav">
                        <li className="buttons-section-r col-4"><a className="button-link active-button institutional" href="">Institucional</a></li>
                        <li className="buttons-section-r col-4"><a className="button-link  services" href="/Plantillas%20base/TEMPLATES/02-k-01.html">Servicios a la ciudadanía</a></li>
                        <li className="buttons-section-r col-4"><a className="button-link cedae" href="">CEDAE (Datos para la democracia)</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;