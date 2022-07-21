import React, {useEffect, useState} from 'react';


function Popular() {
    const [popular,setPopular]=useState([]);

    useEffect(()=>{
        getPopular();
    },[]);

 const getPopular=async ()=>{
     const  api= await  fetch("https://api.spoonacular.com/recipes/random?apiKey=ec2df15c2abd45769b40f8c7cad212b5&number=9");
        const data=await api.json();
        console.log(data)
     setPopular(data.recipes);
 };


    return (
        <div>
            {popular.map((r)=>{
               return(
                   <div key={r.id}>
                   <p>
                       {r.title}
                   </p>
                   </div>
               );
            })}
        </div>
    );
}

export default Popular;