import React from 'react'
import CardLayout from "../../CardLayout/CardLayout";
import {NavLink} from "react-router-dom";


const TeamsCard = (props: any) => {
    return (
        <NavLink to='/teamsCardDetails' >
            <CardLayout img={props.img} />
        </NavLink>

    )
}


export default TeamsCard
