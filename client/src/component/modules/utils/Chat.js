import React from "react";
import '../styles/Chat.css';
export default function ComingMsg({ chil }) {
    return (
        <div className="cm_msg">
            <div className="cm_msg_ctn">
                <div className="txt__msg">
                    <span className="txt">{chil}</span>
                </div>
            </div>
        </div>
    );
}

export function SendingMsg({ chil }) {
    return (
        <div className="cm_msg">
            <div className="cm_msg_ctn">
                <div className="txt__msg_send">
                    <span className="txt_send">{chil}</span>
                </div>
            </div>
        </div>
    );
}