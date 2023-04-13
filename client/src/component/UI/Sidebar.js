import React from 'react';
import { Link } from 'react-router-dom';
import './style/Sidebar.css';
import {User} from '../modules/utils/user'
// import { MdKeyboardBackspace } from "react-icons/md";

export default function Sidebar({ path }) {
    // const [__path, setPath] = useState("");
    // const navigate = useNavigate();
    // useEffect(() => {
    //     return navigate(__path)
    // },[__path])

    const onSelectColor = (item) => {
        let p = `/Dashboard/${item}`;
        if (path === '/Dashboard' || path !== p) {
            return 'sidebar__item';
        }
        return 'sidebar__item color__blue'
    }

    return (
        <div className='sidebar__'>
            <div className='sidebar_ctn'>
                <Link to='Home' className='item_name'><div className={onSelectColor('Home')}>Trang Của tôi</div></Link>
                <Link to='DSNV' className='item_name'><div className={onSelectColor('DSNV')}>DSNV</div></Link>
                <Link to='TB' className='item_name'><div className={onSelectColor('TB')}>Thông báo</div></Link>
                <Link to='/Chat' className='item_name'><div className={onSelectColor('Chat')}>Tin nhắn</div></Link>
                <Link to='NV' className='item_name'><div className={onSelectColor('NV')}>Nhiệm vụ</div></Link>
            </div>
            <div className='sidebar__footer'>
                <img
                    alt = 'avt'
                    src= {User.avt}
                    className = 'avt-img'
                />
                <div className='user_name' style={{
                    'margin-left' : '10px',
                    'width' : '100%'
                }}>
                    <div style={{
                        'font-weight': 'bold',
                        'font-family': 'inherit'
                    }}>
                        {User.name}
                    </div>
                    <div style={{
                        'font-family': 'inherit',
                        'font-weight' : '300',
                        'font-size' : '15px'
                    }}>
                        {User.role}
                    </div>
                </div>
            </div>
        </div>
    );
}