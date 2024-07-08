import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/design-system.css';
import { Button } from 'bootstrap';
import { AppContext } from '../AppContext';
import { useNavigate  } from 'react-router-dom';


const contenedorInputStyle = {
    margin: '3px',
    padding: '0px',
};

const Formulario = () => {
    const { state, dispatch } = useContext(AppContext);
    const navigate  = useNavigate();

    const [inputData, setInputData] = useState({
        TRC: '',
        TDB: '',
        SRC: '',
        NDI: '',
        PA: '',
        SA: '',
        PN: '',
        SN: '',
        SEXO: '',
        FDN: ''
    });
    const [selectedOption, setSelectedOption] = useState(''); // Estado para la opción seleccionada
    const [selectedOptionCampo, setSelectedOptionCampo] = useState('NC'); // Estado para la opción seleccionada

    const serialCondition = selectedOptionCampo !== 'SN' && selectedOptionCampo !== 'TC';
    const nombresCondition = selectedOptionCampo !== 'NC' && selectedOptionCampo !== 'TC';
    const documentoCondition = selectedOptionCampo !== 'DI' && selectedOptionCampo !== 'TC';

    const handleInputChange = event => {
        const { name, value } = event.target;
        setInputData(prevData => ({ ...prevData, [name]: value }));
    };
    const handleInputChange_ruta = event => {
        const { name, value } = event.target;
        setInputData(prevData => ({ ...prevData, [name]: value }));
        setSelectedOption(event.target.value); // Actualiza el estado con la opción seleccionada
    };
    const handleInputChange_campo = event => {
        const { name, value } = event.target;
        setInputData(prevData => ({ ...prevData, [name]: value }));
        setSelectedOptionCampo(event.target.value);
    };
    
    const handleSubmit = event => {

        event.preventDefault();
            // Determina la ruta según el valor seleccionado
        let ruta = '';
        let estado = '';

        switch (selectedOption) {
        case 'RCN':
            ruta = '/nipRcn'; // Cambia esto por la ruta que deseas
            estado = 'UPDATE_RCN_DATA'
            break;
        case 'RCM':
            ruta = '/RCM'; // Cambia esto por la ruta que deseas
            estado = 'UPDATE_RCM_DATA'
            break;
        // Agrega más casos según sea necesario
        default:
            ruta = '/nipRcn'; // Cambia esto por la ruta que deseas
            estado = 'UPDATE_RCN_DATA'
            break;
        }
        // Enviar la información al backend utilizando fetch
        fetch('http://localhost:3001'+ ruta, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            dispatch({ type: estado, payload: data });
            navigate('/resultado'); 
        })
        .catch(error => {
            console.error(error);
        });
    };
    return (
        <div>
            <div className="row title-section-pres">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center color-blue">SISTEMA DE CONSULTAS Y CERTIFICADOS DE REGISTROS CIVILES</h1>
                </div>
            </div>
            
            <div className="flexbox-row">
                <form onSubmit={handleSubmit}>
                    {/* Fila 1 */}
                    <div className="flexbox-row" style={contenedorInputStyle}>
                        <div className="col-md-9 offset-md-0">
                            <label for="TRC" className="control-label title-form"><strong>Tipo de registro civil</strong></label>
                            <select className="form-control lightinput pqrsform" id="TRC" onChange={handleInputChange_ruta}>
                                <option value="RCN">Registro Civil de Nacimiento</option>
                                <option value="RCM">Registro Civil de Matrimonio</option>
                                <option value="RCD">Registro Civil de Defunción</option>
                            </select>
                            <p className="requiered">Campo requerido</p>
                        </div>
                        
                        <div className="col-md-9 offset-md-2">
                            <label for="TDB" className="control-label title-form"><strong>Tipo de búsqueda</strong></label>
                            <select className="form-control lightinput pqrsform" id="TDB" onChange={handleInputChange_campo}>
                                <option value="NC">Nombre Completo</option>
                                <option value="DI">Documento de Identidad</option>
                                <option value="TC">Todos los Criterios</option>
                                <option value="SN">Serial</option>
                            </select>
                            <p className="requiered">Campo requerido</p>
                        </div>
                    </div>
                    {/* Fila 2 */}
                    <div className="flexbox-row" style={contenedorInputStyle}>
                        <div className="col-md-9 offset-md-0">
                            <label class="title-form" for="SRC"><strong>Serial del registro civil</strong></label>
                            <input type="number" id="SRC" class="lightinput pqrsform" onChange={handleInputChange} placeholder="Digite el número sin puntos ni comas" checked 
                            required={serialCondition ? true : false} disabled={serialCondition}/>
                            <p class="requiered">Campo requerido</p>
                            <div class="invalid-feedback">Ingrese serial</div>
                        </div>

                        <div className="col-md-9 offset-md-2">
                            <label className="title-form" for="NDI"><strong>Número de identificación</strong></label>
                            <input type="number" id="NDI" className="lightinput pqrsform" onChange={handleInputChange} placeholder="DNI" checked 
                            required={documentoCondition ? true : false} disabled={documentoCondition}/>
                            <p className="requiered">Campo requerido</p>
                            <div className="invalid-feedback">Ingrese su Identificación</div>
                        </div>
                    </div>
                    {/* Fila 3 */}
                    <div className="flexbox-row" style={contenedorInputStyle}>
                        <div className="col-md-9 offset-md-0">
                            <label class="title-form" for="PA"><strong>Primer apellido</strong></label>
                            <input type="text" id="PA" class="lightinput pqrsform" onChange={handleInputChange} placeholder="Digite su primer apellido" checked 
                            required={nombresCondition ? true : false} disabled={nombresCondition} />
                            <p class="requiered">Campo requerido</p>
                            <div class="invalid-feedback">Ingrese su primer apellido</div>
                        </div>

                        <div className="col-md-9 offset-md-2">
                            <label className="title-form" for="SA"><strong>Segundo apellido</strong></label>
                            <input type="text" id="SA" className="lightinput pqrsform" onChange={handleInputChange} placeholder="Ingrese su segundo apellido" checked required />
                            <p className="requiered">Campo requerido</p>
                            <div className="invalid-feedback">Ingrese su segundo apellido</div>
                        </div>
                    </div>
                    {/* Fila 4 */}
                    <div className="flexbox-row" style={contenedorInputStyle}>
                        <div className="col-md-9 offset-md-0">
                            <label class="title-form" for="PN"><strong>Primer nombre</strong></label>
                            <input type="text" id="PN" class="lightinput pqrsform" onChange={handleInputChange} placeholder="Ingrese su primer nombre" checked required />
                            <p class="requiered">Campo requerido</p>
                            <div class="invalid-feedback">Ingrese su primer nombre</div>
                        </div>

                        <div className="col-md-9 offset-md-2">
                            <label className="title-form" for="SN"><strong>Segundo nombre</strong></label>
                            <input type="text" id="SN" className="lightinput pqrsform" onChange={handleInputChange} placeholder="Ingrese su segundo nombre" checked required />
                        </div>
                    </div>
                    {/* Fila 5 */}
                    {/* ESTO NO ES CAMPO REQUERIDO */}
                    <div className="flexbox-row" style={contenedorInputStyle}>
                        <div className="col-md-9 offset-md-0">
                            <label class="title-form" for="SEXO"><strong>Sexo</strong></label>
                            <input type="text" id="SEXO" class="lightinput pqrsform" onChange={handleInputChange} placeholder="" checked required />
                            <p class="requiered">Campo requerido</p>
                            <div class="invalid-feedback">Ingrese su sexo</div>
                        </div>

                        <div className="col-md-9 offset-md-2">
                            <label className="title-form" for="FDN"><strong>Fecha de nacimiento</strong></label>
                            <input type="date" id="FDN" className="lightinput pqrsform" onChange={handleInputChange} placeholder="" checked required />
                            <p className="requiered">Campo requerido</p>
                            <div className="invalid-feedback">Ingrese su Fecha de Nacimiento</div>
                        </div>
                    </div>
                    
                    <div className='flexbox-row' style={contenedorInputStyle}>
                        {/* <input type="button" className="mainbtn  btn-action" onClick={}>Buscar Registro Civil</input> */}
                        <button type="submit" className="mainbtn  btn-action">Buscar Registro Civil</button>
                        {/* <Link to="/resultado" className="mainbtn  btn-action" >Buscar Registro Civil</Link> */}
                        <Link to="/busqueda" className="mainbtn  btn-action" >Limpiar</Link>

                        {/* <button class="mainbtn  btn-action" style={contenedorInputStyle} data-bs-toggle="" data-bs-target="">Buscar Registro Civil</button>
                        <button class="mainbtn  btn-action" style={contenedorInputStyle} data-bs-toggle="" data-bs-target="">Limpiar</button> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formulario;