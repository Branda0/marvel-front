import { useState } from "react";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = ({ setTokens, setSignupModal, setLoginModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [signupError, setSignupError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://branda0-marvel.up.railway.app/user/signup", {
        email: email,
        username: name,
        password: password,
      });
      setTokens(response.data.token);
      setSignupModal(false);
      // setSignupError("");
    } catch (error) {
      if (error.response.status === 400) {
        setSignupError("missing parameters");
      } else if (error.response.status === 409) {
        setSignupError("This email is already a member!");
      }
    }
  };

  return (
    <div className="modal-container">
      <div className="signup-modal">
        <FontAwesomeIcon icon="xmark" className="close-modal" onClick={() => setSignupModal(false)} />
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <div className="form-input-password">
            <input
              className="input"
              value={password}
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

          {signupError && <span className="error-msg">{signupError}</span>}
          <button type="submit">SIGN UP</button>
        </form>
        <span
          className="bottom-link"
          onClick={() => {
            setSignupModal(false);
            setLoginModal(true);
          }}
        >
          Already a member ? Login !
        </span>
      </div>
    </div>
  );
};

export default Signup;
