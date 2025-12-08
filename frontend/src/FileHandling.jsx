import React from 'react'
import { useState } from 'react'

const FileHandling = () => {
  const [file,setFile] = useState([])
  const [preview,setPreview] = useState([])
  console.log(preview)
  console.log(file)
  
  // function submitHandler(){

  // }


  return (
    <>
      <form action="">
        <input type="file" multiple onChange={(e)=>{
          let files = e.target.files
          setFile(files)

          let arr = []
          for(let i = 0; i<files.length;i++){
            arr.push(URL.createObjectURL(files[i]))
          }
          setPreview(arr)

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