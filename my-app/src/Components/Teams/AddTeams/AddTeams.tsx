import React from 'react';
import s from "./AddTeams.module.css";
import Add_Players_Teams from "../../Add_Players_Teams/Add_Players_Teams";

let teamsInput = true
let blockFormLabel = ['Team', 'Division', 'Conference', 'Year of foundation']

const AddTeams = (props: any) => {
    return (
        <div className={s.addTeams}>
            <Add_Players_Teams
                blockFormLabel={blockFormLabel}
                teamsInput={teamsInput}
            />
        </div>
    )
}

export default AddTeams;