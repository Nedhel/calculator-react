import React from "react";
import { BsPlusLg, BsDashLg,  } from "react-icons/bs";
import { FaTimes, FaDivide, FaEraser } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";

export function Button({operation, buttonFunction}){
    let element
    let style='bg-orange-500 rounded-lg p-2'
    switch(operation){
        case 'Add':
            element=<BsPlusLg/>
            break;
        case 'Minus':
            element=<BsDashLg/>
            break;
        case 'Times':
            element=<FaTimes/>
            break;
        case 'Divided':
            element=<FaDivide/>
            break;
        case 'Erase':
            element=<FaEraser/>
            style='bg-black rounded-lg p-2 text-orange-600'
            break;
        case 'Clear':
            element=<AiOutlineClear/>
            style='bg-black rounded-lg p-2 text-orange-600'
            break;
        default:
            element=''
            break;
    }
    return(
        <button onClick={buttonFunction} className={style}>
            {element}
        </button>
    )
}