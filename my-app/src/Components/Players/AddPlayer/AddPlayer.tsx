import React from 'react';
import s from './AddPlayer.module.css'
import Add_Players_Teams from "../../Add_Players_Teams/Add_Players_Teams";

let descriptionPlayers = true
let blockFormLabel = ['Name', 'Position', 'Team']
let descriptionPlayersLabel = ['Height', 'Weight', 'Age', 'Number']


const AddPlayer = (props: any) => {
    return (
        <div className={s.addPlayers}>
            < Add_Players_Teams
                descriptionPlayersLabel={descriptionPlayersLabel}
                blockFormLabel={blockFormLabel}
                descriptionPlayers={descriptionPlayers} />
        </div>

    )
}

export default AddPlayer