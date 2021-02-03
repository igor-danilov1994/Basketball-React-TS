import React from 'react';
import CardEmpty from "../../CardEmpty/CardEmpty";
import img from '../images/TeamsEmpty.png';

let patch = '/addTeams'
let teams = 'teams'

const TeamsEmpty = (props: any) => {
    return (
        <CardEmpty descr={teams} patch={patch} img={img} />
    )
}

export default TeamsEmpty;