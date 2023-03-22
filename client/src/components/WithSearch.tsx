import React, { useState } from "react";

export function withSearch(Component: React.ComponentType){
    return function(){
        const [query, setQuery] = useState("")

        function handleChange(e: React.ChangeEvent<HTMLInputElement>){
            setQuery(e.target.value)
        }

        return(
            <div>
                <input type="text" onChange={handleChange} value={query} />
                <Component /> 
            </div>
        )
    }
}