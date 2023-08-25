import React from 'react';
import '../css/design-system.css';

const tdStyle = {
    width: '50%',
    textAlign: 'left',
};

const Tabla = () => {

    return (
        <div>
            <div className="row title-section-pres">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center color-blue">SISTEMA DE CONSULTAS Y CERTIFICADOS DE REGISTROS CIVILES</h1>
                </div>
            </div>

            <div className='container' style={tdStyle}>
                <h2 className="text-center linebottom">INFORMACIÓN BASICA</h2>
                <div className='table-responsive'>
                    <table className="table container" id="myTable" >
                        <tbody>
                            <tr>
                                <td style={tdStyle}>
                                    <h6><strong>Número de Identificación (Nuip/Nip/Tarjeta de Identidad):</strong></h6>
                                </td>
                                <td>
                                    <p>123456789</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="" data-label="">
                                    <h6><strong>Primer Apellido:</strong></h6>
                                </td>
                                <td className="" data-label="">
                                    <p className="">ORTEGA</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="" data-label="">
                                    <p><strong>Segundo Apellido:</strong></p>
                                </td>
                                <td className="" data-label="">
                                    <p className="">FAJARDO</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="" data-label="">
                                    <p><strong>Primer Nombre:</strong></p>
                                </td>
                                <td className="" data-label="">
                                    <p className="">GERSON</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="" data-label="">
                                    <p><strong>Segundo Nombre:</strong></p>
                                </td>
                                <td className="" data-label="">
                                    <p className="">ENRIQUE</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='container' style={tdStyle}>
                <h2 className="text-center linebottom">INFORMACIÓN DEL REGISTRO CIVIL</h2>
                <div className='table-responsive'>
                    <table className="table container" id="myTable">
                        <tbody>
                            <tr>
                                <td style={tdStyle}>
                                    <p><strong>Serial del Registro Civil:</strong></p>
                                </td>
                                <td>
                                    <p>987654321</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="" data-label="">
                                    <p><strong>Nuip/Nip/Tarjeta de Identidad:</strong></p>
                                </td>
                                <td className="" data-label="">
                                    <p className="">123456789</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="" data-label="">
                                    <p><strong>Fecha de inscripcion (dd-mm-aaaa):</strong></p>
                                </td>
                                <td className="" data-label="">
                                    <p className="">29 DE ABRIL DE 1981</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="" data-label="">
                                    <p><strong>Oficina de Registro:</strong></p>
                                </td>
                                <td className="" data-label="">
                                    <p className="">NOTARIA 1 MONTERIA - CORDOBA</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="" data-label="">
                                    <p><strong>Tipo de Registro Civil:</strong></p>
                                </td>
                                <td className="" data-label="">
                                    <p className="">REGISTRO CIVIL DE NACIMIENTO</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='flexbox-row'>
                        <button class="mainbtn  btn-action" data-bs-toggle="" data-bs-target="">Generar Certificado</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabla;