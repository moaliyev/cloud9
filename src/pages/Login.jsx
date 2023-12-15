import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { setUser, setUserIn } from "../redux/slices/userSlice";

const Login = () => {
  const loginSchema = object({
    email: string().required().trim().email(),
    password: string().required().trim(),
  });

  const dispatch = useDispatch();
  const { userIn } = useSelector(state => state.user);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async data => {
    await axios
      .post(process.env.REACT_APP_LOGIN, data)
      .then(res => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        const token = res.data.token;
        const body = { token };
        if (token !== null) {
          axios
            .post(process.env.REACT_APP_CHECK_LOGIN, body)
            .then(res => {
              dispatch(setUserIn(true));
              dispatch(setUser(res.data));
              navigate("/");
            })
            .catch(err => {
              console.log(err);
              setUserIn(false);
            });
        }
      })
      .catch(err => {
        toast.error("Invalid email or password");
        console.log(err);
      });
  };
  return (
    <>
      {userIn ? (
        navigate("/")
      ) : (
        <section className="login">
          <Toaster position="top-right" reverseOrder={false} />
          <div className="container">
            <div className="row">
              <h4 className="title">LOGIN</h4>
              <p className="info">Please enter your e-mail and password:</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className={`${errors.email ? "error" : ""}`}
                  {...register("email")}
                />
                {errors.email && (
                  <span className="errorMsg">{errors.email.message}</span>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className={`${errors.password ? "error" : ""}`}
                  {...register("password")}
                />
                {errors.password && (
                  <span className="errorMsg">{errors.password.message}</span>
                )}
                <button type="submit">LOGIN</button>
              </form>
              <p>
                Don't have an account? <Link to="/register">Create one</Link>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
