import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    firstName: "",
    sureName: "",
    birth: "",
    degree: "",
    country: "",
    sity: "",
    login: "",
    password: "",
    passwordCop: "",
  });
  console.log(user);

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const Send = async () => {
    // window.location.reload(false);
    const res = await axios.post(`http://localhost:5000/users`, user);
    console.log(res);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-4 justify-content-between">
            <form action="" className="mt-3">
              <input
                type="text"
                className="form-data w-75 m-2 "
                placeholder="First Name"
                name="firstName"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-75 m-2 "
                placeholder="Sure Name"
                name="sureName"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-75 m-2 "
                placeholder="birth"
                name="birth"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-75 m-2 "
                placeholder="degree"
                name="degree"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-75 m-2 "
                placeholder="country"
                name="country"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-75 m-2 "
                placeholder="sity"
                name="sity"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-75 m-2 "
                placeholder="login"
                name="login"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-75 m-2 "
                placeholder="password"
                name="password"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-75 m-2 "
                placeholder="passwordCop"
                name="passwordCop"
                onChange={changeHandler}
              />
            </form>
            <br />
            <button
              // type="submit"
              className="btn btn-primary"
              onClick={() => Send()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
