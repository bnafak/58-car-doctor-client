
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../assets/images/login/login.svg'
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password=form.password.value;
        console.log(email, password)

        signIn(email, password)

        .then((result) => {
            // Signed up 
            const user = result.user;
            console.log(user)
            // ...
          })
          .then((error) => {
            console.error(error)
            // ..
          });
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 mr-20">
          <img src={login} alt="" />
         
        </div>
        <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">

        
          <form onSubmit={handleLogin} className="card-body">
            <h1 className='text-center'>Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email" name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password" name='password'
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='text-center my-4'> If new Motor Doctor <Link className='text-extra-bold text-orange-600' to='/signUp'>Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
