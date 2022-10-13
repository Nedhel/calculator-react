import React from "react";

export function Screen({inputRef}){
    return(
        <input type='number' ref={inputRef} className='w-full rounded-lg border border-gray-500 p-1'/>
    )
}