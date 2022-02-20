import { useState } from "react";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = ({ setTokens, setLoginModal, setSignupModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://brandao-marvel.herokuapp.com/user/login", {
        email: email,
        password: password,
      });

      setTokens(response.data.token);
      setLoginModal(false);
    } catch (error) {
      console.log({ error });
      if (error.response.status === 400 || error.response.status === 401) {
        setLoginError("Access denied");
      }
    }
  };

  return (
    <div className="modal-container">
      <div className="login-modal">
        <FontAwesomeIcon
          icon="xmark"
          className="close-modal"
          onClick={() => {
            setLoginModal(false);
          }}
        />
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            type="email"
            placeholder="Email Adress"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <div className="form-input-password">
            <input
              className="input"
              type={passwordVisibility ? "text" : "password"}
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <span onClick={() => setPasswordVisibility(!passwordVisibility)} className="eye-icon">
              <FontAwesomeIcon icon="eye" />
            </span>
          </div>
          {loginError && <span className="error-msg">{loginError}</span>}
          <button type="submit">LOGIN</button>
        </form>
        <span
          className="bottom-link"
          onClick={() => {
            setLoginModal(false);
            setSignupModal(true);
          }}
        >
          No account yet ? Sign up !
        </span>
      </div>
    </div>
  );
};

export default Login;
