import React, {useEffect, useRef, useState} from 'react';
import './styles/TestMain.css';
import animation from "../../utils/animation";
import TestMainImage from "../../assets/Main1.png";
import Back from "../../assets/Back.png"
import TestText from "../../assets/Text.png"


function TestMain() {
    const mainItemRef = useRef<HTMLDivElement>(null);

    const [showItem, setShowItem] = useState(true);

    useEffect(() => {
        animation(mainItemRef, true, 2);
    }, [mainItemRef])

    useEffect(() => {
        if (showItem && mainItemRef.current) {
            const currentTarget = mainItemRef.current!
            currentTarget.style.opacity = "1";
            currentTarget.style.transform = "translate3d(-50%, -50%, 0)";
        }
    }, [showItem]);

    const setShowItemWithAnimation = (value: boolean) => setShowItem((show: boolean) => {
        if (!value) {
            mainItemRef.current!.style.opacity = "0";
            mainItemRef.current!.style.transform = "translate3d(-50%, 100%, 0)";
        }
        return value;
    })

    return (
        <div className="TestMain">
            <img onClick={() => {
                setShowItemWithAnimation(true);
            }}
                 className={"TestMainImage"} src={TestMainImage} alt={"TestMainImage"}/>
            {showItem && <>
                <div className={"TestMainShader"}/>
                <div ref={mainItemRef} className={"TestMainItem"}>
                    <img onClick={() => {
                        setShowItemWithAnimation(false);
                    }} className="TestMainBackImage" src={Back} alt={""}/>
                    <img className="TestMainDetailImage" src={TestText} alt={""}/>
                </div>
            </>
            }
        </div>
    );
}

export default TestMain;
