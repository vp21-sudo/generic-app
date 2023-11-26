import { useState, useCallback } from "react"
import Input from "../utils/input"
import Button from "../utils/button";
import { useEffect } from "react";
import { useRef } from "react";
import { Copy, ClipboardCheck } from 'lucide-react';
const PassowrdGenerator = () => {
    const passwordRef = useRef(null);

    const [password, setPassword] = useState("asdfa");
    const [passLength, setPassLength] = useState(8);
    const [numbersAllowed, setnumbersAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [passwordCopied, setpasswordCopied] = useState(false);

    const generatePassword = useCallback(() => {
      let pass = ''
      let str= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      if(numbersAllowed) str += '0123456789'
      if(charAllowed) str += "!@#$%^&*()_"
      while(pass.length < passLength){
        const char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    }, [passLength, numbersAllowed, charAllowed])

    const copyPassword = (e) => {
      e.preventDefault();
      window.navigator.clipboard.writeText(password)
      passwordRef.current?.select();
      setpasswordCopied(true);
    }

    useEffect(() => {
      generatePassword()
      setpasswordCopied(false)
    }, [generatePassword])
  return (
    <div className=" flex flex-wrap items-center justify-start w-full md:w-1/3 rounded-2xl my-8 p-4 bg-slate-600">
        <h2 className=" w-full text-2xl text-center text-slate-50 mb-5">Password Generator</h2>
        <div className=" flex justify-center items-center w-full">
        <Input reference={passwordRef} type="text" className=" w-4/5 " readOnly={true} value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button onClick={e=>{copyPassword(e)}} className=" bg-slate-900 rounded-none flex justify-center items-center rounded-e-xl px-2 md:px-4 py-2 w-1/5 text-lg md:text-xl ">{passwordCopied?<ClipboardCheck size={32} color="#e7dfdf" />: <Copy size={32} color="#e7dfdf" />}</Button>
        </div>
        <div className=" w-full mx-2 flex justify-between items-center mt-4">
        <div className=" flex justify-center items-center">
        <input name="length" id="length" type="range" className=" w-2/3" min={6} max={48} onChange={(e) => setPassLength(e.target.value)} value={passLength}/>
        <label htmlFor="length" className=" mx-2">Length:{passLength}</label>
        </div>
        <div className=" flex justify-center items-center">
        <Input type="checkbox" id="numbers" name="numbers" checked={numbersAllowed} onChange={() => setnumbersAllowed(!numbersAllowed)}/>
        <label htmlFor="numbers" className=" mx-2">Numbers</label>
        </div>
        <div className=" flex justify-center items-center">
        <Input type="checkbox" id="chars" name="chars" checked={charAllowed} onChange={() => setCharAllowed(!charAllowed)}/>
        <label htmlFor="chars" className=" mx-2">Characters</label>
        </div>
        </div>
    </div>
  )
}

export default PassowrdGenerator