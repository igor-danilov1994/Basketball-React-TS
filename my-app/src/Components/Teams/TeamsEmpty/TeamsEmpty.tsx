import React from 'react';
import CardEmpty from "../../CardEmpty/CardEmpty";
import img from '../images/TeamsEmpty.png';

let patch = '/addTeams';

const TeamsEmpty = (props: any) => {
    return (
        <CardEmpty patch={patch} img={img} />
    )
}

export default TeamsEmpty;