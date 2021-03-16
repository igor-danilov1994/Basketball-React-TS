import React, {useRef} from 'react';
import s from "./AddingImg.module.css";
import avatar from '../../images/addAvatar.svg';

type AddImagesPropsType = {
    setImg: (img: any) => void
}

const AddImages: React.FC<AddImagesPropsType> = ({setImg}) => {

    const ref= useRef(null)

    let handleClick = () => {
        // @ts-ignore
        ref.current.click()
    }

    let ABC = () => {
        // @ts-ignore
        setImg(ref.current.files)
    }

    return (
        <>
            <div className={s.addAvatar_Logo} onClick={handleClick}>
                <img src={avatar} alt="addAvatar"/>
            </div>
            <input style={{display: "none"}} ref={ ref }
                   accept="image/*" type="file" onChange={ABC}  />
        </>

    )
}

export default AddImages