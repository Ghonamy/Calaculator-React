import { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
function Calculator() {
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState(false);
  const handleThemeToggle = () => {
    setTheme(!theme);
  };
  const handleNumberClick = (number) => {
    setValue((prev) => prev + number);
  };
  const handleClearButton = () => {
    setValue("");
  };
  const handleDeleteButton = () => {
    setValue((prev) => prev.slice(0, -1));
  };
  const handleEqualButton = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("invalid operation");
    }
  };
  return (
    <div
      className={`${
        theme ? "bg-[#d2d1d1]" : "bg-[#373737]"
      } min-h-screen text-[#d2d1d1] p-[10px]`}
    >
      <div
        className={`bg-[#18181a] rounded-xl w-fit mx-auto mt-[180px] p-[25px] flex flex-col items-center gap-2 shadow-[0_0_10px_#000] select-none ${
          theme && "bg-[#a1a1a1] text-[#29292b]"
        }`}
      >
        <div
          className={`h-[80px] w-[250px] rounded-xl bg-[#2b2b2baa] flex justify-end p-4 text-[25px] mb-4 cursor-text items-center tracking-widest font-semibold overflow-x-hidden ${
            theme && "bg-[#d2d2d2]"
          }`}
        >
          {value}
        </div>
        <div className="flex justify-between w-full">
          <button
            onClick={handleThemeToggle}
            className="w-[50px] h-[50px] rounded-full text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            {theme ? (
              <MdDarkMode className="inline text-[#e72076]" />
            ) : (
              <MdLightMode className="inline text-[#e72076]" />
            )}
          </button>
          <button
            onClick={() => handleNumberClick("%")}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            %
          </button>
          <button
            onClick={() => handleNumberClick("/")}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            /
          </button>
          <button
            onClick={() => handleNumberClick("*")}
            className="w-[50px] h-[50px] rounded-full border-0 text-[25px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            *
          </button>
        </div>
        <div className="flex justify-between w-full">
          <button
            onClick={() => handleNumberClick(7)}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            7
          </button>
          <button
            onClick={() => handleNumberClick(8)}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            8
          </button>
          <button
            onClick={() => handleNumberClick(9)}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            9
          </button>
          <button
            onClick={() => handleNumberClick("-")}
            className="w-[50px] h-[50px] rounded-full border-0 text-[30px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            -
          </button>
        </div>
        <div className="flex justify-between w-full">
          <button
            onClick={() => handleNumberClick(4)}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            4
          </button>
          <button
            onClick={() => handleNumberClick(5)}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            5
          </button>
          <button
            onClick={() => handleNumberClick(6)}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            6
          </button>
          <button
            onClick={() => handleNumberClick("+")}
            className="w-[50px] h-[50px] rounded-full border-0 text-[30px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            +
          </button>
        </div>
        <div className="flex justify-between w-full gap-2">
          <button
            onClick={() => handleNumberClick(1)}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            1
          </button>
          <button
            onClick={() => handleNumberClick(2)}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            2
          </button>
          <button
            onClick={() => handleNumberClick(3)}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            3
          </button>
          <button
            onClick={() => handleNumberClick(".")}
            className="w-[50px] h-[50px] rounded-full border-0 text-[30px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            .
          </button>
        </div>
        <div className="flex justify-between w-full items-center gap-2">
          <button
            onClick={handleClearButton}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold text-[#e72076] duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            AC
          </button>
          <button
            onClick={() => handleNumberClick(0)}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            0
          </button>
          <button
            onClick={handleDeleteButton}
            className="w-[50px] h-[50px] rounded-full border-0 text-[20px] font-semibold duration-300 hover:bg-[#49494982] flex justify-center items-center"
          >
            DEL
          </button>
          <button
            onClick={handleEqualButton}
            className="w-[50px] h-[50px] rounded-full border-0 text-[30px] font-semibold bg-[#e72076]"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
