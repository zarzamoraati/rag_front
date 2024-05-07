
import { AiFillAliwangwang } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
export const Layout = () => {
  return (
  <div>
     <nav className="navbar navbar-expand-md  w-100"
        style={{marginBottom:"20px"}}>
          <div className="container-fluid ">
              <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapseItem">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="collapseItem">
                <a className="navbar-brand link-light" > 
                 <AiFillAliwangwang  
                 style={{width:"100px", height:"80px", borderRadius:"20%"}}/>
                </a>
                <ul className="navbar-nav gap-3">
                  <Link to="/" className="nav-link link-light link-opacity-75-hover">Home</Link>
                  <Link to="/rag" className="nav-link link-light link-opacity-75-hover">What is RAG?</Link>
                </ul>
              </div>
          </div>
        </nav>
    <div>
      <Outlet/>
    </div>
  </div>
  )
}
