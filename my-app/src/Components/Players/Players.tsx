import React, {useEffect} from 'react'
import PlayerCard from "./PlayerCard/PlayersСard";
import Pagination from "../Pagination/Pagiation";
import {connect} from "react-redux";
import {getPagePlayer, getPageSizePlayer, getPlayersCount, getPlayersData,
    getPlayersNames, getUserName} from '../../Redux/toolkit/selectors';
import {NavLink, Redirect} from "react-router-dom";
import total from "../../totalStyle.module.css";
import searchIcon from "../../assets/images/search.png";
import {setPlayersRequest, getPlayers, setSerialPlayersID} from "../../Redux/toolkit/playersReducer";
import {getTeams} from "../../Redux/toolkit/teamsReducer";
import SelectComponent from "../SelectComponent/SelectComponent";

type PlayersPropsType = {
    name: string
    pagePlayer: number
    pageSizePlayer: number
    playersCount: number
    playersName: Array<string>
    getPlayers: (name: string, pagePlayer: number, pageSizePlayer: number) => void
    getTeams: (name: string, pagePlayer: number, pageSizePlayer: number) => void
    setSerialPlayersID: (index: number) => void
    setPlayersRequest: (pagePlayer: number, pageSizePlayer: number) => void
    players: Array<any>
}

const Players: React.FC<PlayersPropsType> = (
    {
        name, pagePlayer, getPlayers, players, setSerialPlayersID, setPlayersRequest,
        pageSizePlayer, playersCount, playersName
    }) => {

    useEffect(() => {
        getPlayers(name, pagePlayer, pageSizePlayer)
        getTeams(name, pagePlayer, pageSizePlayer)
    }, [pagePlayer, pageSizePlayer])

    return (
        <>
            {playersCount !== 0 ?
                <div className={total.mainBlock}>

                    <div className={total.topElement}>
                        <div className={total.topElement_options}>
                            <div className={total.topElement_search}>
                                <input type="text" placeholder='Search...'/>
                                <img src={searchIcon} alt="search"/>
                            </div>

                            <SelectComponent options={playersName} isMulti={true}
                                             closeMenuOnSelect={false}
                            />

                        </div>

                        <NavLink to='/main/addPlayer'
                                 className={`${total.btn} ${total.btn_add} ${total.topElement_btn}`}>
                            <span>Add</span>
                            <span>+</span>
                        </NavLink>
                    </div>

                    <div className={total.mainBlock_card}>
                        {players.map((players: any, index: number) =>
                            <NavLink key={players.id} onClick={() => setSerialPlayersID(index)}
                                     to='/main/playersCardDetails'>
                                <PlayerCard key={index} player={players} teamId={players.team}

                                />
                            </NavLink>
                        )}
                    </div>
                    <Pagination
                        page={pagePlayer}
                        pageSize={pageSizePlayer}
                        pageCount={playersCount}
                        setRequest={setPlayersRequest}/>
                </div>
                : <Redirect to="/main/players_E"/>
            }
        </>
    )
}


const mapStateToProps = (state: any) => ({
    name: getUserName(state),
    players: getPlayersData(state),
    playersName: getPlayersNames(state),
    playersCount: getPlayersCount(state),
    pagePlayer: getPagePlayer(state),
    pageSizePlayer: getPageSizePlayer(state),
})

export default connect(mapStateToProps, {
    getTeams, setPlayersRequest, getPlayers,
    setSerialPlayersID
})(Players)

