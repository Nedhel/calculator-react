import React, { useState, useRef } from "react";
import { Screen } from "./components/Screen";
import { Result } from "./components/Result";
import { Button } from "./components/Button";

function App() {
    const [result, setResult] = useState(0);
    const input = useRef(null);
    function handleAdd() {
        result === 0
            ? setResult(Number(input.current.value))
            : setResult(result + Number(input.current.value));
    }
    function handleMinus() {
        result === 0
            ? setResult(Number(input.current.value))
            : setResult(result - Number(input.current.value));
    }
    function handleTimes() {
        result === 0
            ? setResult(Number(input.current.value))
            : setResult(result * Number(input.current.value));
    }
    function handleDivide() {
        result === 0
            ? setResult(Number(input.current.value))
            : setResult(result / Number(input.current.value));
    }
    function handleErase() {
        input.current.value = "";
    }
    function handleClear() {
        setResult(0);
    }

    return (
        <div className="w-1/4 mx-auto mt-6">
            <h1 className="text-2xl text-orange-500 mb-9 text-center font-semibold">
                Basic Calculator made with React
            </h1>
            <Result value={result} />
            <Screen inputRef={input} />
            <div className="flex justify-between mt-2">
                <Button operation="Add" buttonFunction={handleAdd} />
                <Button operation="Minus" buttonFunction={handleMinus} />
                <Button operation="Times" buttonFunction={handleTimes} />
                <Button operation="Divided" buttonFunction={handleDivide} />
                <Button operation="Erase" buttonFunction={handleErase} />
                <Button operation="Clear" buttonFunction={handleClear} />
            </div>
        </div>
    );
}

export default App;
