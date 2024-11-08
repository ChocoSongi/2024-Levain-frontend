import React, {useEffect, useRef, useState} from 'react';
import './styles/Main.css';
import MainImage from "../assets/Main1.png"
import Main2Image from "../assets/Main2.png"
import animation from "../utils/animation";

function Main() {
    const mainTextRef = useRef<HTMLDivElement>(null);
    // const [isM1, setIsM1] = useState(false);

    useEffect(() => {
        animation(mainTextRef, true, 2);
    }, [mainTextRef])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsM1(!isM1);
    //     }, 10000);
    // }, [isM1]);

    return (
        <div className="Main">
            {/*<img className={`MainImage ${isM1 ? "fadeIn" : "fadeOut"}`} src={MainImage} alt={"MainImage"}/>*/}
            {/*<img className={`MainImage ${!isM1 ? "fadeIn" : "fadeOut"}`} src={Main2Image} alt={"Main2Image"}/>*/}
            <img className={"MainImage"} src={Main2Image} alt={"Main2Image"}/>
            <div ref={mainTextRef} className="MainText animation">
                <span className="Subtitle">자꾸 실패하는 르방 관리?</span>
                <p className="Title">르방, 정답은 없지만<br/><span className="Highlight">오답</span>은 있다.</p>
            </div>
            <a className="MainButton" href="/"><span className="MainButtonText">맞춤 르방 관리법 추천받기</span></a>
        </div>
    );
}

export default Main;
