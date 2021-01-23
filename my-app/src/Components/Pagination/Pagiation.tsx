import React from 'react'
import s from './Pagination.module.css'
import showCountCard from '../../assets/images/link.png'

const Pagination = () => {
    return (
        <div className={s.pagination}>
            <ul className={s.pagination_list}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>

            <div className={s.pagination_selectCountCard}>
                <div className={s.pagination_setCountCard}>
                    <a href="#">6</a>
                    <a href="#">12</a>
                    <a href="#">24</a>
                </div>
                <div className={s.pagination_currentCard}>
                    <span>6</span>
                    <img src={showCountCard} alt="icon"/>
                </div>
            </div>
        </div>
    )
}


export default Pagination
