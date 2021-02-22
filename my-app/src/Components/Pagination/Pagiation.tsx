import React, {useState, CSSProperties} from 'react'
import s from './Pagination.module.css'
import showCountCard from '../../assets/images/link.png'
import ReactPaginate from "react-paginate";
import {connect} from 'react-redux';

export interface toggleCountCard {
    [Key: string]: CSSProperties;
}

const Pagination = (props: any) => {
    const [page, setPage] = useState(props.pageSize)
    const [select, setPageSelect] = useState(false)

    const styles: toggleCountCard = {
        setCountCardShow: {
            display: 'flex',
        },
        setCountCardHidden: {
            display: 'none',
        }
    }

    let handlePageClick = (e: any) => {
        props.setPage(null, e.selected + 1, props.pageSize)
    }

    let setCountCard = (e: any,) => {
        props.setPage(null, null, e.currentTarget.value)
        setPage(e.currentTarget.value)
        setPageSelect(!select)
    }

    return (
        <div className={s.pagination_wrapper}>
            <ReactPaginate
                previousLabel={''}
                nextLabel={''}
                breakLabel={'...'}
                breakClassName={`${s.breakMe}`}
                pageCount={props.pageCount / page}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
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
                        {page}
                    </span>
                    <img className={select ? `${s.pagination_currentCard_rotate}` : ''}
                         src={showCountCard} alt="icon"/>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state: any) => ({})

export default connect(mapStateToProps)(Pagination)
