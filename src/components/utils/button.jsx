
const Button = (props) => {
  return (
    <button className={` shadow-2xl rounded-full px-4 py-2 text-slate-100 transition-all ease-in-out duration-200 ${props.className} `} onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default Button