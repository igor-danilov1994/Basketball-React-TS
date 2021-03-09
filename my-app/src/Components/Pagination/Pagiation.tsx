import React, {useState, CSSProperties, useEffect} from 'react'
import s from './Pagination.module.css'
import link from '../../assets/images/link.png'
import showCountCard from '../../assets/images/link.png'
import ReactPaginate from "react-paginate";
import {connect} from 'react-redux';
import {getUserName} from "../../Redux/toolkit/selectors";
import {getTeams} from "../../Redux/toolkit/teamsReducer.ts";
import {getPlayers} from "../../Redux/toolkit/playersReducer";

export interface toggleCountCard {
    [Key: string]: CSSProperties;
}

type PaginationPropsType = {
    page: number
    pageSize: number
    setRequest: (currentPage: number, size: number) => void
    pageCount: number
}

const Pagination: React.FC <PaginationPropsType> = ({page, pageSize, setRequest, pageCount} ) => {

    const [currentPage, setCurrentPage] = useState(page)
    const [size, setSize] = useState(pageSize)
    const [select, setPageSelect] = useState(false)

    useEffect(() => {
        setRequest(currentPage, size)
    }, [currentPage, size])


    const styles: toggleCountCard = {
        setCountCardShow: {
            display: 'flex',
        },
        setCountCardHidden: {
            display: 'none',
        }
    }

    let handlePageClick = (e: any) => {
        setCurrentPage(e.selected + 1)
    }

    let setCountCard = (e: any,) => {
        setSize(e.currentTarget.value)
        setPageSelect(!select)
    }

    return (
        <div className={s.pagination_wrapper}>
            <ReactPaginate
                disableInitialCallback={false}
                previousLabel={``}
                nextLabel={''}
                breakLabel={'...'}
                breakClassName={`${s.breakMe}`}
                pageCount={pageCount / size}
                marginPagesDisplayed={5}
                pageRangeDisplayed={6}
                onPageChange={handlePageClick}
                containerClassName={`${s.pagination}`}
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
    name: getUserName(state),
})

export default connect(mapStateToProps, {getTeams, getPlayers})(Pagination)
