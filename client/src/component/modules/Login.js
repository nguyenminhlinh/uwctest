import React from "react";
import "./styles/Login.css";
import {User} from '../modules/utils/user';

function Login() {
    const [inputs, setInputs] = React.useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputs.username) {
            alert("Bạn chưa nhập tài khoản!!");
        } else if (!inputs.password) {
            alert("Bạn chưa nhập mật khẩu!!");
        } else {
            if (inputs.username !== User.username || inputs.password !== User.password) {
                alert("Bạn đã nhập sai tài khoản hoặc mật khẩu!!");
            } else {
                localStorage.setItem('USER_LOGIN', '1');
                window.location.href = "/";
            }
        }
    }

    return(
        <section className="vh-100 sectionlogin">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card cardlogin">
                            <div className="card-body p-5 text-center">
                                <form onSubmit={handleSubmit}>
                                    <h3 className="mb-5">Login</h3>

                                        <div className="form-floating mb-4">
                                        <input className="form-control" id="typeUserX-2" type="input" name="username" value={inputs.username || ""} onChange={handleChange} placeholder="Tên đăng nhập"/>
                                        <label for="typeUserX-2">Tên đăng nhập</label>
                                        </div>

                                        <div className="form-floating mb-4">
                                        <input className="form-control" id="typePasswordX-2" type="password" name="password" value={inputs.password || ""} onChange={handleChange} placeholder="Mật khẩu"/>
                                        <label for="typePasswordX-2">Mật khẩu</label>
                                        </div>

                                        <div className="form-check d-flex justify-content-between mb-4">
                                            <div>
                                                <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                                <label className="form-check-label" for="form1Example3"> Remember password </label>
                                            </div>
                                            <a href="/Register">Register!</a>
                                        </div>

                                        <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login;