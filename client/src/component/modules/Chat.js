import React from 'react';
import './styles/Messenger.css'
import { FiSend } from "react-icons/fi";
import UserBox, { UserMessenger, InputMsg } from './utils/UserBox';
import ComingMsg, {SendingMsg} from './utils/Chat';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function Messenger() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/Dashboard');
    }
    return (
        <div className='messenger__container'>
            <div className='messenger__sidebar'>
                <div className='messenger__sidebar-ctn'>
                    {/* <div className='msg__sb__header'>
                        <div className='msg_header_name'>Chat</div>
                    </div> */}
                    <div className="employeeDetail-header p-0">
                    <div className='employeeDetail-icon' onClick={()=>handleBack()}>
                            <FaChevronLeft  size={18} />
                        </div>
                        <div className='listemployee-header-1'>
                            Chat
                        </div>
                    </div>
                    <div className='msg__sb__body'>
                        <div className='msg__sb__body_ctn'>
                            <UserBox />
                        </div>
                    </div>
                    <div className='msg__sb__footer'>
                        <div className='msg__sb__fctn'>
                            <img
                                className='msg__sb_f_img'
                                alt='avt'
                                src='https://avatars.githubusercontent.com/u/76879620?v=4'
                            />
                            <div className='msg__sb__f_dec'>
                                <div className='msg__sb__f_dec_ctn'>
                                    <div className='fw-bold'>
                                        Gia Phong Ngo
                                    </div>
                                    <div className='fw-100'>
                                        active
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-chat'>
                <div className='content-ctn'>
                    <div className='content__hd'>
                        <UserMessenger />
                    </div>
                    <div className='content__body'>
                        <div className='ct__body__show_msg'>
                            <ComingMsg chil={'Đã thu rác xong'} />
                            <SendingMsg chil={'Đã xác nhận'}/>
                        </div>
                    </div>
                    <div className='content__ft'>
                        <div className='content__input'>
                            <div className='content__input_ctn'>
                                <InputMsg />
                                <button className='btn-send'><FiSend /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}