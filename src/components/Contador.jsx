import React, { useState } from 'react';


const Contador = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h1>Contador de Clicks</h1>
            <h3>{contador} clicks</h3>

            <button 
                onClick={() => setContador(contador + 1)}
                type="button" class="btn btn-success"
            >
                Click Incrementador
            </button>

            <button 
                onClick={() => setContador(contador - 1)}
                type="button" class="btn btn-danger"    
            >
                Click Decrementador
            </button>

            <button 
                onClick={() => setContador(0)}
                type="button" class="btn btn-light"
            >
                Click Reset
            </button>
        </div>
    );
}

// function Contador() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>Has clickeado {count} veces</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click Contador
//             </button>
//         </div>
//     );
// }

export default Contador;