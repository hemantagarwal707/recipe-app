import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="nav">
        <div className="left">
            
                <h2>React Recipe App</h2>
            
        </div>
        <div className="search">
            
                <input   type="text"  />
                  
               
            
        </div>
        <div className="right">
        <Link to={`/category/indian`} className="link">
        <div>Indian</div>
    </Link>
    <Link to={`/category/american`} className="link">
        <div>American</div>
    </Link>
    <Link to={`/category/british`} className="link" >
        <div>British</div>
    </Link>
    <Link to={`/category/chinese`} className="link">
        <div>Chinese</div>
    </Link>
    <Link to={`/category/thai`} className="link">
        <div>Thai</div>
    </Link>


        </div>
    </div>
</>
  )
}

export default Navbar