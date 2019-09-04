import React from "react";



    export default function Form({name, handleFormAction}){

        return( 
            <div>
                <input className="input-group mb-3" type="text" placeholder={name} onChange={handleFormAction}></input>
            </div>
        )
     }