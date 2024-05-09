
export const ResponseArea = ({modelResponse,error,isGenerate}:{modelResponse:string,error:string,isGenerate:boolean}) => {
  if(isGenerate){
    return (
      <div className="d-flex justify-content-center 
      align-items-center
      border rounded-1 p-3 vw-100" >
        <div className="spinner-grow text-warning">
          <div className="sr-only">...</div>
      </div>
        </div>
    )
  }else{
    return (
    
      <div className="col-6 border rounded-1 p-3" style={{overflowX:"auto",overflowY:"auto"}}>
        {modelResponse ? <p className="display-6">{modelResponse}</p>:<span>...</span>}
        {error&&<p className="display-7" style={{color:"red"}}>{error}</p>}
      </div>
   
    )    
  }

}
