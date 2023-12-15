import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState("email");
  const navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));

    if (step === "email") {
      const body = { token, email };
      await axios
        .post(process.env.REACT_APP_RESET_PASSWORD, body)
        .then(res => {
          setStep("otp");
          setEmail("");
        })
        .catch(err => console.log(err));
    } else if (step === "otp") {
      const body = { token, otp };
      await axios
        .post(process.env.REACT_APP_VERIFY_OTP, body)
        .then(res => {
          setStep("password");
          setOtp("");
        })
        .catch(err => console.log(err));
    } else {
      const body = { token, password };
      await axios
        .post(process.env.REACT_APP_CHANGE_PASSWORD, body)
        .then(res => {
          setStep("email");
          localStorage.removeItem("token");
          navigate("/login");
        })
        .catch(err => console.log(err));
    }
  };
  return (
    <section className="forgotPassword">
      <div className="container">
        <div className="row">
          <h2 className="title">Change Password</h2>
          {step === "email" ? (
            <form onSubmit={onSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button className="btn">Send Request</button>
            </form>
          ) : step === "otp" ? (
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="otp"
                placeholder="Enter the otp"
                value={otp}
                onChange={e => setOtp(e.target.value)}
              />
              <button className="btn">Send otp</button>
            </form>
          ) : (
            <form onSubmit={onSubmit}>
              <input
                type="password"
                name="password"
                placeholder="Enter your new password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button className="btn">Change Password</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
