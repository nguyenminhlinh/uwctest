import './styles/Notification.css'
function Framechat(props){
    return(
        <div className="ochat">
            <h4 className="nameEmployee">{props.nameEmployee}</h4>  
            <p className="tnchat">{props.content}</p>
        </div>
    )
}
function Notification(){
    return(
        <div className="container container_noti">
            <div className="row row_noti">
                
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className='framechat'>
                        <Framechat nameEmployee="Hà Việt Đức" content="Thông báo đến tất cả nhân viên: Nghỉ tết dương lịch từ ngày 01/01/2023 đến ngày 02/01/2023."></Framechat>
                        <Framechat nameEmployee="Hồ Đức Hưng" content="Hồ Đức Hưng đã đăng dòng trạng thái mới."></Framechat>
                        <Framechat nameEmployee="Ngô Gia Phong" content="Ngô Gia Phong đã phân công cho bạn địa điểm của nhiệm vụ. Vào trang Nhiệm vụ để xem thông tin chi tiết."></Framechat>
                    </div>
                    
                </div>
                
            </div>
            
                
        </div>
    )
}

export default Notification;