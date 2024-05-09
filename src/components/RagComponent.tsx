import { ragGenerate } from "../hook/ragGenerate"
import { FormArea } from "./FormArea"
import { ResponseArea } from "./ResponseArea"
export const RagComponent = () => {
  const { handlePDFUpload, handleChange, question, handleSubmit,modelResponse,error ,isGenerate} = ragGenerate()

  return (
    <>
  <ResponseArea
    error={error}
    isGenerate={isGenerate}
    modelResponse={modelResponse}
    />

    <FormArea
    handlePDFUpload={handlePDFUpload}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    question={question}
    error={error}
    />
  </>
  )
}

