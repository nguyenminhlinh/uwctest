import React from 'react';
import '../styles/UserBox.css'
export default function UserBox() {
    return (
        <div className='user__box'>
            <img
                className='user___avt-img'
                alt='avt'
                src='https://avatars.githubusercontent.com/u/78150104?s=400&u=dcee96387f9a122a93f535f3fb8a14b54f5bb9e4&v=4'
            />
            <div className='user___dec'>
                <div className='user___dec-ctn'>
                    <div className='fw-bold'>Kawasaki</div>
                    <div className='fw-100'>Đang hoạt động</div>
                </div>
            </div>
        </div>
    )
}

export function UserMessenger() {
    return (
        <div className='user__in___chat'>
            <div className='user-ctn'>
                <img
                    alt='avt3'
                    src='https://avatars.githubusercontent.com/u/78150104?s=400&u=dcee96387f9a122a93f535f3fb8a14b54f5bb9e4&v=4'
                    className='user_chat-img'
                />
                <div className='user-dec'>
                    <div className='user-dec-ctn'>
                        <div className='fw-bold'>Kawasaki</div>
                        <div className='fw-100'>Đang hoạt động</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function InputMsg() {
    return (
        <div class="input-group">
            <input type='text' className='form-control'></input>
        </div>
    )
}