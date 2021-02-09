import React from 'react'
import img from "../images/PlayersEmpty.png";
import CardEmpty from "../../CardEmpty/CardEmpty";

let patch = '/main/addPlayer'
let players = '/main/players'

const PlayersEmpty = (props: any) => {
    return (
        <CardEmpty descr={players} patch={patch} img={img} />
    )
}

export default PlayersEmpty;
