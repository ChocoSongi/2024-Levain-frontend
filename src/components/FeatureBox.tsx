import React from 'react';
import './styles/FeatureBox.css';

export type FeatureBoxProps = {
    id: string;
    title: string;
    check: boolean;
    setCheck: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
}

function FeatureBox(props: FeatureBoxProps) {

    const onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setCheck(e.target.checked);
    }

    return (
        <div className="FeatureBox">
            <div className="FeatureBoxTitleContainer">
                <span className="FeatureBoxTitle">{props.title}</span>
                <input id={props.id} className="FeatureBoxCheckBox" type="checkbox" checked={props.check}
                       onChange={onChangeCheckBox}/>
                <label htmlFor={props.id}>
                    <div className="check"/>
                </label>
            </div>
            <div className="FeatureBoxDivider"/>
            {props.children}
        </div>
    );
}

export default FeatureBox;
