import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import { useStateIfMounted } from "use-state-if-mounted";

const Language = () => {

    const params = useParams()
    const [language,setLanguage] = useStateIfMounted()

    useEffect(()=>{
        getLanguage()
    },[])

   const getLanguage = async ()=>{
    await axios.get(`http://127.0.0.1:3000/programming-languages/${params.id}`).then((res)=>{
        console.log(res.data.data[0]);
        setLanguage(res.data.data[0])
    })
    }
    return (
        <div>
            <Nav></Nav>
            {language && (
                <div>
                <h1>{language.name}</h1>
                <h2>{language.released_year}</h2>
                <p>Githut rank: {language.githut_rank}</p>
                </div>
            )}
        </div>
    );
};

export default Language;