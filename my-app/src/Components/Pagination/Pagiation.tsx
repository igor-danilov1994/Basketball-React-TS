import React, {useState, CSSProperties, useEffect} from 'react'
import s from './Pagination.module.css'
import showCountCard from '../../assets/images/link.png'
import ReactPaginate from "react-paginate";
import {connect} from 'react-redux';
import {
    getPagePlayer,
    getPageSizePlayer,
    getPlayersCount,
    getUserName
} from "../../Redux/toolkit/selectors";
import {getTeams} from "../../Redux/toolkit/teamsReducer.ts";
import {getPlayers, setPlayersRequest} from "../../Redux/toolkit/playersReducer";

export interface toggleCountCard {
    [Key: string]: CSSProperties;
}

const Pagination = (props: any) => {

    const [page, setPage] = useState(props.pagePlayer)
    const [size, setSize] = useState(props.pageSizePlayer)
    const [select, setPageSelect] = useState(false)

    useEffect(() => {
        props.setRequest(page, size)
    }, [page, size])



    const styles: toggleCountCard = {
        setCountCardShow: {
            display: 'flex',
        },
        setCountCardHidden: {
            display: 'none',
        }
    }

    let handlePageClick = (e: any) => {
        setPage(e.selected + 1)
    }

    let setCountCard = (e: any,) => {
        setSize(e.currentTarget.value)
        setPageSelect(!select)
    }

    //debugger
    return (
        <div className={s.pagination_wrapper}>
            <ReactPaginate
                previousLabel={''}
                nextLabel={''}
                breakLabel={'...'}
                breakClassName={`${s.breakMe}`}
                pageCount={props.pageCount / size}
                marginPagesDisplayed={5}
                pageRangeDisplayed={6}
                onPageChange={handlePageClick}
                containerClassName={`${s.pagination}`}
                //subContainerClassName={'pages pagination'}
                activeClassName={`${s.active}`}
            />

            <div className={s.pagination_selectCountCard}>
                <ul style={select ? styles.setCountCardShow : styles.setCountCardHidden}
                    className={s.pagination_setCountCard}>
                    <li onClick={setCountCard} value={6}>6</li>
                    <li onClick={setCountCard} value={12}>12</li>
                    <li onClick={setCountCard} value={24}>24</li>
                </ul>
                <div className={s.pagination_currentCard} onClick={() => setPageSelect(!select)}>
                    <span>
                        {size}
                    </span>
                    <img className={select ? `${s.pagination_currentCard_rotate}` : ''}
                         src={showCountCard} alt="icon"/>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state: any) => ({
    state: state,
    name: getUserName(state),
    pagePlayer: getPagePlayer(state),
    pageSizePlayer: getPageSizePlayer(state),
})

export default connect(mapStateToProps, {getTeams, getPlayers})(Pagination)
