import { useState } from "react";
import "./App.css";

function App() {
  const [input, setinput] = useState("");
  const [result, setresult] = useState("");

  const handleClick = (value) => {
    setinput(input + value);
  };

  const handleClear = () => {
    setinput(input.slice(0,-1));
    setresult("");
  };

  const handleCalculate = () => {
    setresult(eval(input));
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-gray-800 p-8 rounded w-80">
          <div className="text-2xl font-bold mb-4 text-white">Calculator</div>
          <div className="mb-4">
            <input
              readOnly
              value={input}
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Input"
            />
          </div>
          <div className="mb-4">
            <input
              value={result}
              readOnly
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Result"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {["7", "8", "9", "/"].map((item) => (
              <button
                key={item}
                value={item}
                className="bg-blue-500 text-white p-4 rounded"
                onClick={(e) => handleClick(e.target.value)}
              >
                {item}
              </button>
            ))}
            {["4", "5", "6", "*"].map((item) => (
              <button
                key={item}
                value={item}
                className="bg-blue-500 text-white p-4 rounded"
                onClick={(e) => handleClick(e.target.value)}
              >
                {item}
              </button>
            ))}
            {["1", "2", "3", "-"].map((item) => (
              <button
                key={item}
                value={item}
                className="bg-blue-500 text-white p-4 rounded"
                onClick={(e) => handleClick(e.target.value)}
              >
                {item}
              </button>
            ))}
            {["0", ".", "=", "+"].map((item) => (
              <button
                key={item}
                value={item}
                className="bg-blue-500 text-white p-4 rounded"
                onClick={(e) =>
                  item === "=" ? handleCalculate() : handleClick(e.target.value)
                }
              >
                {item}
              </button>
            ))}
            <button
              className="col-span-4 bg-red-500 text-white p-4 rounded"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
