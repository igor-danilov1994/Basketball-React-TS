import React from 'react'
import img from "../images/PlayersEmpty.png";
import CardEmpty from "../../CardEmpty/CardEmpty";

const PlayersEmpty = () => {
    return (
        <CardEmpty descr={'players'} patch={'/main/addPlayer'} img={img} />
    )
}

export default PlayersEmpty;
