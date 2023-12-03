import { useState } from "react"
import PassowrdGenerator from "./components/main/password-generator";
import CurrencyConverter from "./components/main/currency-converter";
// import CurrencyConverter from "./components/main/currency-converter";

const App = () => {
  const [bgColor, setBgColor] = useState("#6b27d9");
  const handleColorChange = (e) => {
    console.log(e.target.value)
    setBgColor(e.target.value);
  }
  return (
    <main style={{backgroundColor: bgColor}} className={` max-w-screen w-screen h-screen max-h-screen transition-all duration-300 ease-in-out flex flex-col items-center justify-between`}>
      <PassowrdGenerator/>
      <CurrencyConverter/>
      {/* <CurrencyConverter/> */}
      <div className=" flex justify-around items-center w-full md:w-1/3 bg-slate-100 shadow-xl px-8 py-2 mb-10 rounded-3xl">
        <span className=" text-2xl font-medium w-2/3 ">Select Background Color:</span>
        <input type="color" value={bgColor} className=" bg-transparent w-1/3 h-12 " onChange={e=>handleColorChange(e)}/>
      </div>
    </main>
  )
}

export default App