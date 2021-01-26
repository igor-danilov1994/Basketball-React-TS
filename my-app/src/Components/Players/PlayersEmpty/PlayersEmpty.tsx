import React from 'react'
import img from "../images/PlayersEmpty.png";
import CardEmpty from "../../CardEmpty/CardEmpty";

let patch = '/addPlayer'

const PlayersEmpty = (props: any) => {
    return (
        <CardEmpty patch={patch} img={img} />
    )
}

export default PlayersEmpty;
