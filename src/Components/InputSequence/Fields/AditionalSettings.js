import React, { Fragment, useState } from 'react';
//Componentes
import FunctionInputField from './InputSequenceField';


const AditionalSettings = ({ originFieldName, periodicFieldName, onChange }) => {
    //Constantes
    const SHOW_CONFIGURATION = 'Mostrar opciones extra';
    const HIDE_CONFIGURATION = 'Ocultar opciones extra';
    //Hooks
    const [collapsed, setCollapsed] = useState(false);
    return(
        <Fragment>
            <div 
                id = { `header_${ originFieldName }` } 
                onClick = { (e) => setCollapsed(!collapsed) }
                className = 'cursor-click'
                data-toggle = 'collapse' 
                data-target = { `#collapse_${ originFieldName }` } 
                aria-expanded = 'true' 
                aria-controls = { `collapse_${ originFieldName }` } 
            >
                { collapsed ? HIDE_CONFIGURATION : SHOW_CONFIGURATION }
            </div>
            <div 
                id = { `collapse_${ originFieldName }` } 
                className = 'collapse' 
                aria-labelledby = { `header_${ originFieldName }` }
            >
                <div  className='d-flex flex-row justify-content-center align-items-center'>
                    <div className='custom-control custom-checkbox mr-4'>
                        <input 
                            type='checkbox' 
                            id = { periodicFieldName }
                            name = { periodicFieldName } 
                            value = 'true'
                            onChange = { onChange }
                            className ='custom-control-input' 
                        />
                        <label 
                            className = 'custom-control-label' 
                            for = { periodicFieldName }
                        >
                            Periódica
                        </label>
                    </div>
                    <FunctionInputField
                        name = { originFieldName }
                        type = 'number'
                        label = 'Origen (índice):'
                        onChange = { onChange }
                        placeholder = 'Índice del origen'
                        defaultValue = '0'
                    />
                </div>
            </div>
        </Fragment>
    )
}



export default AditionalSettings;