import React from 'react'
import s from './Teams.module.css'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
import TeamsCard from "./TeamsCard/TeamsCard";
import Pagination from "../Pagination/Pagiation";
import TopInnerElement from "../TopInnerElement/TopInnerElement";


const Teams = (props: any) => {
    return (
        <div className={s.teams}>
            <TopInnerElement/>
            <div className={s.teams_card}>
                <TeamsCard img={img1}/>
                <TeamsCard img={img2}/>
                <TeamsCard img={img3}/>
                <TeamsCard img={img4}/>
                <TeamsCard img={img5}/>
                <TeamsCard img={img6}/>
            </div>
            <div className={s.teamsPagination}>
                <Pagination/>
            </div>
        </div>
    )
}


export default Teams
