import  { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios';
interface PDFFile{
    content:ArrayBuffer|null;
    name:string|null;
}

export const ragGenerate = () => {
    
 const [question,setQuestion]=useState<string>("")
 const [pdfFile,setPdfFile]=useState<PDFFile>({content:null,name:""})
 const [error,setError]=useState("")
 const [modelResponse,setModelResponse]=useState("")
 const [isGenerate,setGenerate]=useState(false)

//
  const handlePDFUpload=(e:ChangeEvent<HTMLInputElement>)=>{
    const file=e.target.files?.[0]
    if(file){
        const reader=new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onload=()=>{
          const arrayBuffer=reader.result as ArrayBuffer
          setPdfFile({content:arrayBuffer,name:file.name})
        }
    }
    
    
  }
  
  //
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    const {value}=e.target
    if(!value){
        setError("Field cannot by empty")
    }
    setQuestion(value)
  }
  //

  const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
    try{
        e.preventDefault()
        
        setModelResponse("")
        setError("")

        if(!question || !pdfFile){
            setError("Fields cannot be empty")
        }
        
        const formdata=new FormData()
        if(pdfFile.content && pdfFile.name){
            setGenerate(true)
            //CREATE THE REQUEST BODY
            //const pdfBlob = new Blob([pdfFile.content], { type: 'application/pdf' })
            const file = new File([pdfFile.content], pdfFile.name,{type:'application/pdf'})
            formdata.append("pdf",file)
            formdata.append("question",question)
            //MAKE THE REQUEST
            //console.log(formdata)
            const response=await axios.post("https://zarzamorati10-rag-fastapi.hf.space/generate",formdata)
            if(response.data[0]){
              setModelResponse(response.data[0])
            }else{
              setError("There was a problem in the response")
            }
            setPdfFile({content:null,name:""})
            setQuestion("")
            setGenerate(false)
         }
    }catch(e:unknown){
        if(e instanceof Error){
        setError(`There was an error at the moment to make the request, try again later. \n Details: ${e.message}`)
        setGenerate(false)
        }
    }
  }
  return {handlePDFUpload,pdfFile,handleChange,question,handleSubmit,error,modelResponse,setModelResponse,isGenerate}
  
}
