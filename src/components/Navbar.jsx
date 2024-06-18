import React from 'react'

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
          <div>indian</div>
          <div>american</div>
          <div>british</div>
          <div>chinese</div>
          <div>thai</div>


        </div>
    </div>
</>
  )
}

export default Navbar