import React, { useRef } from 'react';
import Nav from '../components/Nav';
import Languages from '../components/Languages';
import axios from "axios";



const List = () => {
    const languageName = useRef()
    const pypl_rank = useRef()
    const github_rank = useRef()
    const tiobe_rank = useRef()
    const release = useRef()


    const addLanguage = async (e)=>{
        e.preventDefault()

       const language = {
            name:languageName.current.value,
            released_year:release.current.value,
            githut_rank:release.current.value,
            pypl_rank:release.current.value,
            tiobe_rank:release.current.value,
        }
        console.log(languageName.current.value);
       await axios.post('http://127.0.0.1:3000/programming-languages',language).then((res)=>{
        console.log(res);
        window.languagesComponent.fetchLanguages()
       })

    }


    return (
        <div id='List'>
            <Nav></Nav>
            <h1 >List</h1>
            <Languages></Languages>

            <form onSubmit={addLanguage}>
                <input placeholder='LanguageName' autoComplete='off' ref={languageName} type="text" id="language-name" />
                <input placeholder='relaseDate' min={1990} max={2022} ref={release} type="number"  id="release-date" />
                <input placeholder='githutRank' ref={github_rank} type="number"  id="github-rank" />
                <input placeholder='pyplRank' ref={pypl_rank} type="number"  id="pypl_rank" />
                <input placeholder='tiobeRank' ref={tiobe_rank} type="number"  id="tiobe_rank" />
                <input  type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default List;