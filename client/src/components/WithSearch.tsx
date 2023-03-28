import React, { useState } from "react";

interface ComponentI{
    data: []
}

export function withSearch(Component: React.ComponentType<ComponentI>, dataset: any){
    return function(){
        const [query, setQuery] = useState("")

        function handleChange(e: React.ChangeEvent<HTMLInputElement>){
            setQuery(e.target.value)
        }

        return(
            <div>
                <input type="text" onChange={handleChange} value={query} />
                <Component data={dataset}/> 
            </div>
        )
    }
}