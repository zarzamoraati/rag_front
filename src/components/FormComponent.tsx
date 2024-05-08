import { ragGenerate } from "../hook/ragGenerate"
export const FormComponent = () => {
  const { handlePDFUpload, handleChange, question, handleSubmit,modelResponse } = ragGenerate()

  return (
    <>
    <div className="col-6 border rounded-1 p-3">
      {modelResponse ? <p className="display-6">{modelResponse}</p>:<span>...</span>}
    </div>

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
        <button 
        style={{width:"100%"}}
        type="submit">Ask</button>
     </div>
    </form>
  </>
  )
}

