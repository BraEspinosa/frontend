import React from 'react';
import { Link } from "react-router-dom";
import '../css/design-system.css';

const cardStyle = {
    width: '50rem',
    textAlign: 'justify',
    margin: 'auto',
    border: '1px solid white',
    borderRadius: '40px',
    padding: '20px',
};

const tituloStyle = {
    textAlign: 'center',
};

const botonStyle = {
    margin: '40px 20px',
};

const Principal = () => {

    return (
        <div>
            <div className="row title-section-pres">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center color-blue">SISTEMA DE CONSULTAS Y CERTIFICADOS DE REGISTROS CIVILES</h1>
                </div>
            </div>
            
            <div className="row title-section-pres">
                <div className="col-md-6 offset-md-3">
                    <h2 className="text-center color-blue">Certificados de Registro Civil</h2>
                </div>
            </div>

            <div className="card" style={cardStyle}>
                <div className="card-body">
                    <h5 className="card-title" style={tituloStyle}>Registro Civil</h5>
                    <p className="card-text">
                        El Registro Civil de nacimiento constituye la base para la identificación de la población colombiana. En el siguiente enlace 
                        usted podrá consultar la oficina en donde se adelantó la inscripción de su registro civil de nacimiento o de matrimonio. Esta 
                        información le será suministrada por el sistema siempre y cuando usted tenga grabado el serial de su registro en las bases de 
                        datos de la Registraduría Nacional, teniendo en cuenta que el formato de seriales para el registro civil de nacimiento fue 
                        implementado paulatinamente a partir del año 1970 y para registro civil de matrimonio a partir de 1981, de acuerdo con lo 
                        establecido en el Decreto 1260 de 1970.<br /><br />Sí ha realizado recientemente algún tramité de actualización a su registro,
                        este cambio será reflejado dentro de los próximos cinco(5) días hábiles siguientes.
                    </p>
                </div>
            </div>
            
            <div className="flexbox-row" style={cardStyle}>
                <Link to="/busqueda" style={botonStyle} className="mainbtn  btn-action">Ingreso Ciudadanía</Link>
                <Link to="" style={botonStyle} className="mainbtn  btn-action">Ingreso Institucional</Link>
            </div>
        </div>
    );
};

export default Principal;