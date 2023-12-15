import { Link } from "react-router-dom";
import userImg from "../assets/images/user.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserIn } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { t } from "i18next";

const Profile = () => {
  const { user, userIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeImage = async e => {
    const token = JSON.parse(localStorage.getItem("token"));
    const profileImage = e.target.files[0];

    const body = new FormData();

    body.append("token", token);
    body.append("profileImage", profileImage);

    await axios
      .put(process.env.REACT_APP_CHANGE_IMAGE, body)
      .then(res => dispatch(setUser(res.data)))
      .catch(err => console.log(err));
  };

  const handleClick = () => {
    localStorage.removeItem("token");
    dispatch(setUserIn(false));
    dispatch(setUser({}));
    navigate("/");
  };

  useEffect(() => {
    if (!userIn) navigate("/");
  }, [navigate, userIn]);

  return (
    <section className="profileSection">
      <div className="container">
        <div className="row">
          <div className="profileTitle">
            {t("profile.welcome")} {user.name} {user.surname}
          </div>
          <div className="userBox">
            <div className="leftSide">
              <div className="img">
                <img
                  src={
                    user.profileImage
                      ? `${process.env.REACT_APP_USER_IMAGE}/${user.profileImage}`
                      : userImg
                  }
                  alt="Profile"
                />
              </div>
              <input type="file" onChange={changeImage} />
            </div>
            <div className="rightSide">
              <ul className="userInfo">
                <li className="userItem">
                  {t("profile.name")}: {user.name}
                </li>
                <li className="userItem">
                  {t("profile.surname")}: {user.surname}
                </li>
                <li className="userItem">
                  {t("profile.email")}: {user.email}
                </li>
                <li className="userItem">
                  <Link to="/forgot-password">
                    {t("profile.changePassword")}
                  </Link>
                </li>
                <li className="userItem">
                  <span onClick={handleClick}>{t("profile.logOut")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
