import React, {useEffect, useRef, useState} from 'react';
import './styles/Section3.css';
import animation from "../../utils/animation";
import FeatureBox from "../../components/FeatureBox";
import DiagonalArrowImage from "../../assets/DiagonalArrow.svg";

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
            <div className="Section3Container">
                <div className="Section3TitleContainer">
                    <span className="Section3Title">OOPS!</span>
                    <span className="Section3Description"><span className="Section3DescriptionHighlight">11월 15일</span> 오픈 베타 테스터를 모집합니다!<br/>
웹보다 더 다양하고 편리한 기능들을 가장 먼저 만나보세요.</span>
                </div>
                <div className="ExpectedFeatureContainer">
                    <span className="ExpectedFeatureTitle">어떤 기능이 가장 기대되나요?</span>
                    <div className="FeatureBoxContainer">
                        <FeatureBox id={"analysis"} title={"분석"} check={analysisCheck} setCheck={setAnalysisCheck}>
                            <span className="FeatureBoxDescription">
                                내 르방은 상위<br/>몇 프로 컨디션일까?<br/>AI가 객관적인 정보를 제공해드려요
                            </span>
                            <div className="FeatureBoxImg"/>
                        </FeatureBox>
                        <FeatureBox id={"optimization"} title={"최적화"} check={optimizationCheck}
                                    setCheck={setOptimizationCheck}>
                            <span className="FeatureBoxDescription">
                                내 스케줄에 최적화된<br/>르방 관리법을 추천해드려요.<br/>내일 더 건강한 르방을 만나보세요.
                            </span>
                            <div className="FeatureBoxImg"/>
                        </FeatureBox>
                        <FeatureBox id={"alert"} title={"알림"} check={alertCheck} setCheck={setAlertCheck}>
                            <span className="FeatureBoxDescription">
                                계획보다 실행이 어렵죠.<br/>걱정마세요.<br/>SourPot이 도와드릴게요!
                            </span>
                            <div className="FeatureBoxImg"/>
                        </FeatureBox>
                    </div>
                </div>
                <div className="MailContainer">
                    <span className="MailTitle">가장 기대되는 기능을 선택해주세요!</span>
                    <span className="MailDescription">이메일을 남겨주시면 10분을 추첨해서 발효 온도 측정에 활용할 수 있는 <wbr/>탐침 온도계를 선물로 드려요.</span>
                    <div className="MailBox">
                        <span className="MailBoxTitle">E-mail <span className="MailBoxTitleRequired">*</span></span>
                        <input className="MailInput" type="email"/>
                    </div>
                    <a className="SendMailBtnTitle" href="/public">
                        이메일 제출하기  <img src={DiagonalArrowImage} alt={""} width={12} height={12}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Section3;
