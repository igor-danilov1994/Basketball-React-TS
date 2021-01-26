import React from 'react';
import s from './Add_Players_Teams.module.css'
import total from '../.././totalStyle.module.css'
import AddImages from "./AddImages/AddImages";
import Block_Buttons from "./Blocl_Buttons/Blocl_Buttons";
import Block_Form from "./Block_Form/Block_Form";
import DescriptionPlayers from "./DescrPlayers/DescriptionPlayers";
import TeamsInput from "./TeamsInput/TeamsInput";

const Add_Players_Teams = (props: any) => {
    return (
        <div className={s.blockAdding}>
            <div className={total.breadCrumbs}>
                Main/Players/NamePlayers
            </div>
            <div className={s.blockAdding_wrapper}>

                <AddImages/>

                <form className={s.blockAdding_form}>
                    <Block_Form
                        blockFormLabel={props.blockFormLabel}/>

                    {props.teamsInput &&
                        <TeamsInput blockFormLabel={props.blockFormLabel}/>
                  }

                    {props.descriptionPlayers &&
                        <DescriptionPlayers
                            descriptionPlayersLabel={props.descriptionPlayersLabel}/>
                    }

                    <Block_Buttons/>
                </ form>
            </div>
        </div>

    )
}

export default Add_Players_Teams