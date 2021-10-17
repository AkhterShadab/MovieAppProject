import React from 'react'

function Card(props) {
    const data=props.getData;
    console.log(data);
    return (
        data.map((item,index)=>
        {
            return item.poster_path && (
                <div className="card mb-3 m-3" style={{maxWidth:"700px"}} key={index}>
                <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.overview}</p>
                    <div className="group d-flex justify-content-around" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success">Play</button>
                    <button type="button" className="btn btn-secondary">View</button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                )
            })
            )
}

export default Card;
