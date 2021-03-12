import React from 'react';
import CardEmpty from "../../CardEmpty/CardEmpty";
import img from '../images/TeamsEmpty.png';


const TeamsEmpty = () => {
    return (
        <CardEmpty descr={'teams'} patch={'/main/addTeams'} img={img} />
    )
}

export default TeamsEmpty