import React from 'react'
import total from "../../totalStyle.module.css"

type ErrorsMessagePropsType = {
    textMessage: string
}

const ErrorsMessage: React.FC <ErrorsMessagePropsType> = ({textMessage}) => {
    return (
        <span className={total.error}>{textMessage}</span>
    )
}

export default ErrorsMessage