import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { loadCaptchaEnginge, LoadCanvasTemplate,
      validateCaptcha } 
     from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const {signIn}= useContext(AuthContext);

 
    const [disabled, setDisabled]= useState(true)
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
        .then(result => {
          const user = result.user
          console.log(user);
          Swal.fire({
            title: "login Success",
            text: "That thing is still around?",
            icon: "success"
          })
        })
    }
    useEffect(()=>{
        loadCaptchaEnginge(4);
    },[])
    
    const hanldeCaptcha = (e) => {
       const value = e.target.value;
       if(validateCaptcha(value)){
          setDisabled(false)
       }

    }
  return (
    <div>
      <Helmet><title>Bistro Boss | Login</title></Helmet>
      <div className="hero min-h-screen bg-[#fff]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
         
          <img  src="../../../assets/others/authentication.gif" alt="" />
        </div>
        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
             <LoadCanvasTemplate/>
              </label>
              <input
              
              onBlur={hanldeCaptcha}
                type="text"
                name="captcha"
                placeholder="type a captcha"
                className="input input-bordered"
                required
              />
            
             
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled}  className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p><small>new here? <Link to="/signup">Create an account</Link></small></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
