import { useState } from 'react';
import BtnStyles from '../../styles/Btn.module.css';

const Btn = props => {
    const [BtnClass, setClass] = useState([props.class, BtnStyles.Btn]);

    return(
        <button onClick={props.clicked} className={"btn "+ BtnClass.join(" ") }><span className="mr-2">{props.title} </span><i className={`fas fa-${props.iconName} `}></i></button>
    ); 

}
export default Btn;