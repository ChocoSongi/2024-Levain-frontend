import React, {useEffect, useRef, useState} from 'react';
import './styles/Banner.css';
import Banner1Image from "../../assets/Banner1.png";
import Banner2Image from "../../assets/Banner2.png";

function Banner() {
    const [isB1, setIsB1] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsB1(!isB1);
        }, 10000);
    }, [isB1]);

    return (
        <div className="Banner">
            <div className={`BannerContainer ${isB1 ? "fadeIn" : "fadeOut"}`}
                 style={{
                     backgroundImage: `url(${Banner1Image})`,
                 }}>
            <span className="BannerTitle">건강한 빵을 만드는 것은 어려운 여정이예요.<br/>
앱에선 30% 더 시간을 아껴드릴게요.</span>
            </div>
            <div className={`BannerContainer ${!isB1 ? "fadeIn" : "fadeOut"}`}
                 style={{
                     backgroundImage: `url(${Banner2Image})`,
                 }}>
                <span className="BannerTitle">건강한 빵을 만드는 것은 어려운 여정이예요.<br/>
앱에선 30% 더 시간을 아껴드릴게요.</span>
            </div>
        </div>
    )
        ;
}

export default Banner;