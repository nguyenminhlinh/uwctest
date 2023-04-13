import "./styles/Login.css"
function Register() {
    return(
        <section className="vh-100 sectionlogin">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card cardlogin">
                            <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Register</h3>

                                <div class="form-floating mb-4">
                                <input class="form-control" id="typeUserX-2" type="input" placeholder="Tên đăng nhập"/>
                                <label for="typeUserX-2">Tên đăng nhập</label>
                                </div>

                                <div class="form-floating mb-4">
                                <input class="form-control" id="typePasswordX-2" type="password" placeholder="Mật khẩu"/>
                                <label for="typePasswordX-2">Mật khẩu</label>
                                </div>

                                <div class="form-floating mb-4">
                                <input class="form-control" id="typePasswordX-3" type="password" placeholder="Nhập lại mật khẩu"/>
                                <label for="typePasswordX-3">Nhập lại mật khẩu</label>
                                </div>

                                <div className="form-check d-flex justify-content-end mb-4">    
                                    <a href="/Login">Login!</a>
                                </div>

                                <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register;