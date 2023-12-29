import {render} from "@testing-library/react";
import {useRef, useState} from "react";
import css from "./InvitationPage.module.css"


const OFFSET_WIDTH = 19;
const OFFSET_HEIGHT = 66;

function MovingButton() {

    const [position, setPosition] = useState({left:0, top:0});
    const [isHover, setIsHover] = useState(false);

    const OnMouseOver = () => {
        setIsHover(true);
        const x = Math.random() * (window.innerWidth - OFFSET_WIDTH)
        const y = Math.random() * (window.innerHeight - OFFSET_HEIGHT)
        setPosition({left: x, top: y})
    }

    return (
            <button
                className={css["answer-button"]}
                onMouseOver={OnMouseOver}
                style={isHover ? { position: 'absolute', left: position.left, top: position.top } : null}
            >No</button>
        )

}

export default MovingButton;