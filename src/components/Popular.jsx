import React, {useEffect, useState} from 'react';
import styled from "styled-components";

function Popular() {
    const [popular,setPopular]=useState([]);

    useEffect(()=>{
        getPopular();
    },[]);

 const getPopular=async ()=>{
     const  api= await  fetch("https://api.spoonacular.com/recipes/random?apiKey=ec2df15c2abd45769b40f8c7cad212b5&number=9");
        const data=await api.json();

     setPopular(data.recipes);
     console.log(data.recipes)
 };


    return (
        <div>
            {popular.map((r)=>{
               return(
                   // <div key={r.id}>
                   // <p>
                   //     {r.title}
                   // </p>
                   // </div>
                   <Wrapper>
                       <h3>Popular</h3>
                       {popular.map((r)=>{
                           return(
                               <Card>
                                   <p>{r.title}</p>
                               </Card>
                           );

                       })}
                   </Wrapper>
               );
            })}
        </div>
    );
}

const Wrapper=styled.div`
margin: 4rem 0rem;
`;

const Card=styled.div`
min-height: 25rem;
  border-radius: 2rem;
`;

export default Popular;