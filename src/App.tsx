import React from 'react'
import './App.css'
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaPhp, FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVue } from "react-icons/io5";

function App() {
  return (
    <>
      <div className='wrapper'>
        <div className="item item-1">
          <FaHtml5 color='#e34c26' size={80}/>
        </div>
        <div className="item item-2">
          <FaCss3Alt color='#264de4' size={80}/>
        </div>
        <div className="item item-3">
          <IoLogoJavascript color='#f0db4f' size={80}/>
        </div>
        <div className="item item-4">
          <IoLogoVue color='#42b883' size={80}/>
        </div>
        <div className="item item-5">
          <FaReact color='#88dded' size={80}/>
        </div>
        <div className="item item-6">
          <FaNode color='#215732' size={80}/>
        </div>
        <div className="item item-7">
          <FaPhp color='#8993be' size={80}/>
        </div>
        <div className="item item-8">
          <FaJava color='#5382a1' size={80}/>
        </div>
      </div>
    </>
  )
}

export default App
