import { useState } from 'react';
import BtnStyles from '../../styles/Btn.module.css';

const Btn = ({ title, altTitle, clicked, class_name, iconName }) => {
    const [BtnClass, setClass] = useState([class_name, BtnStyles.Btn]);

    return (
        <button onClick={clicked} className={"btn " + BtnClass.join(" ")}>
            {
                altTitle ? (<>
                   <span className={"mr-2 "+BtnStyles.AltMessage}>{altTitle} </span><i className={`fas fa-${iconName} `}></i>
                </>) : (<>
                    <span className="mr-2">{title} </span><i className={`fas fa-${iconName} `}></i>
                </>
                )
            }</button >
    );

}
export default Btn;