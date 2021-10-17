import React,{useState} from 'react'
import Moviedata from './movieData';

const UIComponent = () => {
    const [input, setInput]=useState("");
    const handleInput=(e)=>
    {
      e.preventDefault();
      setInput("");    
    }
  
    const inputChange=(e)=>
    {
        setInput(e.target.value);
    }
    return (
        <>
        <div className="App">
        <div className="text-white bg-dark p-2" style={{width:"700px"}}> 
        <div className="container">
            <div className="row row justify-content-md-center">
                <div className="col col-lg-2" >
                <img src="green_app_icon.svg" style={{height: "50px"}}/>
                </div>
                <div className="col-md-auto"><h1>Movie DB Search</h1></div>
            </div>
        
        <nav className="navbar d-flex justify-content-center">
        <form className="form d-inline-flex " style={{width: "500px"}} onSubmit={handleInput}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={input} onChange={inputChange}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>
        </div>
        </div>
        </div>
        <Moviedata getValue={input} />
        </>
    )
}

export default UIComponent
