
const Input = (props) => {
  return (
    <input ref={props.reference || null} min={props.min} placeholder={props.placeholder} readOnly={props.readOnly || false} type={props.type} value={props.value} disabled={props.disabled || false} className={` outline-none px-4 py-2 bg-blue-100 font-semibold w-5/6 rounded-s-xl text-xl ${props.className} `} onChange={props.onChange}/>
  )
}

export default Input