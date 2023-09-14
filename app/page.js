"use client"
import React, { useState } from "react";
import { Helmet } from "react-helmet";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([])
  
  
  const submitHandler = (e)=>{
    e.preventDefault()
    setmaintask([...maintask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(maintask)
  }
  
  const deleteHandler = (i)=>{
   let copyTask = [...maintask] 
   copyTask.splice(i,1)
   setmaintask(copyTask)
  }

  let renderTask = <h2 className="font-semibold text-2xl">No Task Available</h2>
   if (maintask.length>0) {
    renderTask = maintask.map((t,i)=>{
      return (

      <li className="flex items-center justify-between mb-4"> 
        <div className="flex justify-between mb-5 w-2/3"> 
        <h5 className="font-semibold text-2xl"> {t.title} </h5>
        <h6 className="font-semibold text-2xl"> {t.desc} </h6>
  
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }} className="bg-red-600 text-white px-4 py-2 rounded font-bold">Delete</button>
      </li>
      )
    })
   }

  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Todo-List-with-React-js</title> 
            </Helmet>
      <h1
        className="bg-slate-300 text-black p-5 flex justify-center 
   text-xl font-serif text-center "
      >
        My Todo-List{""}
      </h1>
      <div class="container">
      <form className="formz" onSubmit={submitHandler}>
        <input required autoFocus autoCorrect=""
          type="text"
          className="m-10 px-4 py-2 bg-black text-white"
          placeholder="Enter task here*"
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Enter Description here"
          className="m-10 px-4 py-2  bg-black text-white"
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
        />
        <button className="btn bg-black text-white px-4
         py-1 m-10 mt-5">Add Task</button>
      </form>
      </div>
      <hr/>
          <div className="p-8 bg-slate-200">
            <ul className="">
              {renderTask}
            </ul>
          </div>
    </>
  );
};

export default page;
