import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Card from './Card';


const Moviedata=(props)=> {
    const [movie, setMovie] =useState([]);
    const [loading, setloading] = useState(true);
    const type=props.getValue ? props.getValue : "top_rated";
    const popularUrl=`https://api.themoviedb.org/3/movie/top_rated?api_key=03b6a5483aeda144773ff041b3dec6b0&language=en-US&page=1`;
    const searchUrl=`https://api.themoviedb.org/3/search/movie?api_key=03b6a5483aeda144773ff041b3dec6b0&language=en-US&query=${type}&page=1`;
    const url=props.getValue ? searchUrl : popularUrl;
    useEffect(() => {
        getAllData()
    }, [type])
    const getAllData=()=>
    {
        axios.get(url)
        .then((res)=>
        {
            setMovie(res.data.results)
            setloading(false);
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            {loading?<h1>Loading</h1>:<Card getData={movie}/>                
            }
        </div>
    )
}

export default Moviedata;
