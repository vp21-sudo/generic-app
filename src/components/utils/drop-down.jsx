
const DropDown = (props) => {
  return (
    <div className={`flex justify-center items-center transition-all ease-in-out duration-200 ${props.className}`    }>
        <select className=" p-1 rounded-e-md py-2 bg-blue-100 backdrop-blur-md  text-center text-xl font-semibold  h-full w-full">
            {props.children}
        </select>
    </div>
  )
}

const DropDownItem = (props) => {
  return (
    <option className={` text-xl p-4  ${props.className}`}>
        {props.children}
    </option>
  )
}

export {DropDown, DropDownItem}