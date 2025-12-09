import React from 'react'
import { useState } from 'react'

const FileHandling = () => {
  const [file,setFile] = useState([])
  const [preview,setPreview] = useState([])

    const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/upload"
      : "https://full-stack-fmqw.onrender.com/upload";
  
  const  submitHandler = async(e)=>{
      e.preventDefault()

      const formdata = new FormData()
      formdata.append('file',file)

      const res = await fetch(API_URL,{
        method:"POST",
        body:formdata
      })

      const data = await res.json()
      console.log(data)
      alert("Uploaded Successfully!");
  }


  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input type="file" multiple onChange={(e)=>{
          let files = e.target.files[0]
          setFile(files)

          // let arr = []
          // for(let i = 0; i<files.length;i++){
          //   arr.push(URL.createObjectURL(files[i]))
          // }
          // setPreview(arr)

          setPreview([URL.createObjectURL(files)])

        }}/>
        {/* preview section */}
        {
          preview.map((ele,ind)=>{
            return <img src={ele} alt="" key={ind}/>
          })
        }

        <button>Submit</button>
      </form>
    </>
  )
}

export default FileHandling