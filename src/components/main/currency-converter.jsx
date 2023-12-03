import Button from "../utils/button"
import { DropDown, DropDownItem } from "../utils/drop-down"
import Input from "../utils/input"

const CurrencyConverter = () => {
  return (
    <div className=" flex flex-wrap items-center justify-start w-full md:w-1/3 rounded-2xl my-8 p-4  bg-slate-600 ">
      <div className=" relative backdrop-blur-md w-full">
      <h1 className=" font-semibold text-2xl text-slate-100 text-center w-full">Currency Converter</h1>
      <h3 className=" text-2xl text-slate-950 pt-4 px-1">From</h3>
      <div className=" flex flex-row items-center justify-between">
        <Input type="number" placeholder="Enter Amount" className="  w-2/6" min={0} />
        <DropDown className=" w-2/6 h-full py-2">
          <DropDownItem className=" w-full h-full p-4">USD</DropDownItem>
          <DropDownItem className=" w-full h-full p-4">INR</DropDownItem>
          <DropDownItem className=" w-full h-full p-4">RBL</DropDownItem>
        </DropDown>
      </div>
      <div className=" absolute w-full h-fit flex justify-center items-center ">
        <Button className=" w-1/4 h-full bg-slate-500 hover:bg-slate-400 hover:text-slate-950 mt-1">swap</Button>
      </div>
      <h3 className=" text-2xl text-slate-950 pt-4 px-1">To</h3>
      <div className=" flex flex-row items-center justify-between">
        <Input type="number" disabled={true} placeholder="Enter Amount" className="  w-2/6" min={0} />
        <DropDown className=" w-2/6 h-full py-2">
          <DropDownItem className=" w-full h-full p-4">USD</DropDownItem>
          <DropDownItem className=" w-full h-full p-4">INR</DropDownItem>
          <DropDownItem className=" w-full h-full p-4">RBL</DropDownItem>
        </DropDown>
      </div>
      </div>
    </div>
  )
}

export default CurrencyConverter