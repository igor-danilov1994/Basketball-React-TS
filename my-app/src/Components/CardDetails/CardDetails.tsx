import React from 'react';
import s from './CardDetails.module.css'


const CardDetails = (props: any) => {
    return (
        <div className={s.cardDetails}>
            <div className={s.cardDetails_img}>
                <img src={props.img} alt="img"/>
            </div>
            <div className={s.cardDetails_info}>
                <h1>Greg Whittington #22</h1>
                <div className={s.cardDetails_description}>
                    <div className={s.cardDetails_description_main}>
                        <div className={s.cardDetails_skill}>
                            <h3>Position</h3>
                            <span>Forward</span>
                        </div>
                        <div className={s.cardDetails_skill}>
                            <h3>Team</h3>
                            <span>Forward</span>
                        </div>
                    </div>
                    {props.hidden &&
                        <div className={s.cardDetails_description_main}>
                            <div className={s.cardDetails_skill}>
                                <h3>Position</h3>
                                <span>Forward</span>
                            </div>
                            <div className={s.cardDetails_skill}>
                                <h3>Position</h3>
                                <span>Forward</span>
                            </div>
                        </div>
                    }


                    <div className={s.cardDetails_description_main}>
                        <div className={s.cardDetails_skill}>
                            <h3>Position</h3>
                            <span>Forward</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardDetails;