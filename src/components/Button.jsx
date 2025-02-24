import React from 'react'

const Variant = "Primary" || "Secondary";

const ButtonStyle = {
    "Primary" : "border-none bg-gradient-to-b from-[#679cff] to-[#2370ff] text-white p-2 rounded-lg shadow font-[500] flex justify-center items-center inset-[1.5px] hover:scale-105 transition-all duration-500 text-xl",

    "Secondary" : "border-none bg-[#e9f1ff] text-[18px] text-[#6477b4] p-2 rounded-lg shadow-2xl shadow-black font-[500] flex justify-center items-center inset-[1.5px] hover:scale-105 transition-all duration-500 text-[18px]",

    "Tertiary": "bg-gradient-to-b from-[#f4f8ff] to-[#e9f1ff] text-[#6477b4] px-6 py-2 rounded-xl border border-[#ebedf6] shadow-xl font-[500] flex justify-center items-center inset-[1.5px] hover:scale-105 transition-all duration-500 text-xl ",

    "Fourth": "bg-gradient-to-b from-[#f4f8ff] to-[#d5e4ff] text-[#2370ff] px-3 py-2 rounded-4xl border border-[#ebedf6] shadow font-[500] flex justify-center items-center inset-[1.5px] hover:scale-105 transition-all duration-500 text-lg "
}

const Button = ({StartImage, EndImage, Text, OnClickHandler, Variant, widthFull, classes = ""}) => {
  return (
    <button className={` ${classes} ${Variant ? ButtonStyle[Variant] : ButtonStyle["Secondary"]}  cursor-pointer  `} onClick={OnClickHandler} >
        {Text}
    </button>
  )
}

export default Button