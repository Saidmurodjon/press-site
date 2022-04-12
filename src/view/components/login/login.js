import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    firstName: "",
    sureName: "",
    birth: "",
    degree: "",
    login: "",
    password: "",
    passwordCop: "",
  });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-4 justify-content-between">
            <form action="" className="mt-3">
              <input
                type="text"
                className="form-data w-100"
                placeholder="First Name"
                name="firstName"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-100"
                placeholder="Sure Name"
                name="sureName"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-100"
                placeholder="birth"
                name="birth"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-100"
                placeholder="degree"
                name="degree"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-100"
                placeholder="login"
                name="login"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-100"
                placeholder="password"
                name="password"
                onChange={changeHandler}
              />
              <input
                type="text"
                className="form-data w-100"
                placeholder="passwordCop"
                name="passwordCop"
                onChange={changeHandler}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
