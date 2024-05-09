import React, { ChangeEvent, FormEvent } from 'react'

interface FormProps {
    handlePDFUpload:(e:ChangeEvent<HTMLInputElement>)=>void
    handleChange:(e:ChangeEvent<HTMLInputElement>)=>void
    handleSubmit:(e:FormEvent<HTMLFormElement>)=>Promise<void>
    question:string
    error:string
}

export const FormArea:React.FC<FormProps> = (props) => {
    const {handleChange,handlePDFUpload,handleSubmit,question,error}=props
  return (
    <form 
    className="gap-3 col-5 p-3"
    onSubmit={e=>handleSubmit(e)}
    >
     <div className="form-row gap-3">
        <div className=" mb-3">
          <input
          className="form-control"
          placeholder="Ask some question"
          value={question}
          type="text"
          name="question"
          onChange={e=>handleChange(e)}
          />
        </div>

        <div className=" mb-3">
          <input
          className="form-control"
          type="file"
          accept=".pdf"
          onChange={(event) =>handlePDFUpload(event)}
          />
        </div>
        {error && <p className='display-8' style={{color:"red"}}>{error}</p>}
        <button 
        style={{width:"100%"}}
        type="submit">Ask</button>
     </div>
    </form>
  )
}
