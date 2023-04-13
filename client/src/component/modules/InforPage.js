import './styles/inforpage.css'
function Inforpage() {
    return (
        <div className="container">
            <div className="row row_inforpage">
                <div className="col-3">
                    <div className="overviewinfo">
                        <img className="avatarinfor" alt='avt' src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/254934762_1495378747514937_1789751764774909895_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=q9IabUvzyCkAX9M5qj-&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfC9OAcPT_-zTiFnaXPLWwFJwaRSaFjsooYlQXELTFgZkQ&oe=63921107"/>
                        <div className="frameinfor">
                            <button type="button" class="btn btn-info">Tổng quan</button>
                            <button type="button" class="btn btn-info">Danh sách nhân viên</button>
                            <button type="button" class="btn btn-info">Phân công nhiệm vụ</button>
                            <button type="button" class="btn btn-info">Chat</button>
                            <button type="button" class="btn btn-danger">Đăng xuất</button>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="detailinfor">
                        <div className="detail_email">
                            <h3>Chi tiết người dùng</h3>
                            <p>Địa chỉ email: duc.ha000412@hcmut.edu.vn</p>
                            <p>Role: Back Officer</p>
                        </div>
                        <div className="detail_canhan">
                            <form>

                                <div class="form-group row">
                                    <label class="col-md-3 col-form-label" for="NameEmployee">Họ và tên:</label>
                                    <div class="col-md-7">
                                        <input type="text" class="form-control" name="NameEmployee" value="Hà Việt Đức"></input>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-form-label" for="Birthday">Ngày sinh:</label>
                                    <div class="col-md-7">
                                        <input type="date" class="form-control" name="Birthday" ></input>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-form-label" for="addressE" >Địa chỉ:</label>
                                    <div class="col-md-7">
                                        <input type="text" class="form-control" name="addressE" value="ĐH Bách Khoa TPHCM, TPHCM"></input>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-md-3 col-form-label" for="quoctich">Quốc tịch:</label>
                                    <div class="col-md-7">
                                        <input type="text" class="form-control" name="quoctich" value="Campuchia"></input>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-3 col-form-label" for="lastlogin">Lần cuối truy cập:</label>
                                    <div class="col-md-7">
                                        <input type="text" class="form-control" name="lastlogin" value="12/4/1999"></input>
                                    </div>
                                </div>
                                <div className='button_update'>
                                    <button type="submit" class="btn btn-primary">Cập nhật thông tin</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Inforpage;