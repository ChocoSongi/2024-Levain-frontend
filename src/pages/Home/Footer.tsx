import React, {useEffect, useRef} from "react";
import animation from "../../utils/animation";
import "./styles/Footer.css";
import FooterImage from "../../assets/Main1.png";

function Footer() {
    const mainTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        animation(mainTextRef, true, 2);
    }, [mainTextRef])

    return (
        <div className="Footer">
            <img className={"FooterImage"} src={FooterImage} alt={"FooterImage"}/>
            <div ref={mainTextRef} className="FooterTextContainer animation">
                <p className="FooterTitle">내 위치에서의 <span className="FooterHighlight">맞춤형</span><br/>르방 관리 시간을 알아보고 싶다면?
                </p>
                <span className="FooterSubtitle">앱 기능을 미리 체험해보세요!</span>
                <a className="FooterButton" href="/Test"><span className="FooterButtonText">테스트 해보기</span></a>
            </div>
        </div>
    );
}

export default Footer;