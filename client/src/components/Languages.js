import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

class Languages extends Component {

    constructor(props) {
        super(props);
        // N’appelez pas `this.setState()` ici !
        this.state = {
            languages: []
        };
        window.languagesComponent = this;
    }

    componentDidMount() {
        this.fetchLanguages().then(res=>console.log(this.state.languages))
    }



    fetchLanguages = async () => {
        await axios.get('http://127.0.0.1:3000/programming-languages')
            .then(res => this.setState({ languages: res.data.data }))
            .catch(error => console.log(error))
    }


    render() {
        return (
            <div id='languages'>
                <ul className="languages-list">
                {this.state.languages && (
                    this.state.languages.map((language) => {
                        return <li key={language.id}><Link to={{pathname:`/${language.id}`,state: {language:true}}}>{language.name}-</Link></li>
                    })
                    )}
                    </ul>
            </div>
        );
    }
}

export default Languages;