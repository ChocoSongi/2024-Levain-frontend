import React, {useEffect, useRef, useState} from 'react';
import './styles/Section3.css';
import animation from "../utils/animation";
import FeatureBox from "../components/FeatureBox";
import DiagonalArrowImage from "../assets/DiagonalArrow.svg";

function Section3() {
    const deviceRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        animation(deviceRef)
    }, [deviceRef])

    const [analysisCheck, setAnalysisCheck] = useState(false)
    const [optimizationCheck, setOptimizationCheck] = useState(false)
    const [alertCheck, setAlertCheck] = useState(false)

    return (
        <div className="Section3">
            <div className="V1Section3Container">
                <div className="Section3TitleContainer">
                    <span className="Section3Title">OOPS!</span>
                    <span className="Section3Description"><span className="Section3DescriptionHighlight">11월 15일</span> 오픈 베타 테스터를 모집합니다!<br/>
웹보다 더 다양하고 편리한 기능들을 가장 먼저 만나보세요.</span>
                </div>
                <div className="ExpectedFeatureContainer">
                    <div className="FeatureBoxContainer">
                        <div className="FeatureBoxV1">
                            <span className="FeatureBoxV1Title">분석</span>
                            <div className="V1FeatureBoxImg"/>
                        </div>
                        <div className="FeatureBoxV1">
                            <span className="FeatureBoxV1Title">알람</span>
                            <div className="V1FeatureBoxImg"/>
                        </div>
                        <div className="FeatureBoxV1">
                            <span className="FeatureBoxV1Title">옵션</span>
                            <div className="V1FeatureBoxImg"/>
                        </div>
                    </div>
                </div>
                <div className="V1FooterContainer">
                    <div className="V1FooterItem">
                        <span className="V1FooterItemTitle">앱에서 곧 만나요!</span>
                        <a className="SendMailBtnTitle" href="/">
                           정식 오픈 알림 받기 <img src={DiagonalArrowImage} alt={""} width={12} height={12}/>
                        </a>
                    </div>
                    <div className="V1FooterItem">
                        <span className="V1FooterItemTitle">더 많은 르방 소식</span>
                        <a className="SendMailBtnTitle" href="/">
                            뉴스레터 구독하기 <img src={DiagonalArrowImage} alt={""} width={12} height={12}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;
