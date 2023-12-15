import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const navigate = useNavigate();

  const { userIn } = useSelector(state => state.user);

  const registerSchema = object({
    name: string().trim().required(),
    surname: string().trim().required(),
    email: string().trim().required().email(),
    password: string().trim().required().min(5),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleOnSubmit = async data => {
    await axios
      .post(process.env.REACT_APP_REGISTER, data)
      .then(res => navigate("/login"))
      .catch(err => console.log(err));
  };

  return (
    <>
      {userIn ? (
        navigate("/")
      ) : (
        <section className="login">
          <div className="container">
            <div className="row">
              <h4 className="title">Register</h4>
              <p className="info">Please enter your e-mail and password:</p>
              <form onSubmit={handleSubmit(handleOnSubmit)}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className={`${errors.name ? "error" : ""}`}
                  {...register("name")}
                />
                {errors.name && (
                  <span className="errorMsg">{errors.name.message}</span>
                )}
                <input
                  type="text"
                  placeholder="Surname"
                  name="surname"
                  {...register("surname")}
                  className={`${errors.name ? "error" : ""}`}
                />
                {errors.surname && (
                  <span className="errorMsg">{errors.surname.message}</span>
                )}
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  {...register("email")}
                  className={`${errors.name ? "error" : ""}`}
                />
                {errors.email && (
                  <span className="errorMsg">{errors.email.message}</span>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register("password")}
                  className={`${errors.name ? "error" : ""}`}
                />
                {errors.password && (
                  <span className="errorMsg">{errors.password.message}</span>
                )}
                <button type="submit">REGISTER</button>
              </form>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Register;
