import React from "react";

export function Result({value}){
    return(
        <div className="font-bold text-orange-600 text-2xl border rounded-lg">
            {value}
        </div>
    )
}