/* useLoginAndSignup */
import { useState } from "react";
import { useSignInMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { loginSchema } from "../validations/authSchema";
import { signupSchema } from "../validations/authSchema";
import { useSignUpMutation } from "../services/authService";

export const useLoginAndSignup = () => {
  const dispatch = useDispatch();
  const [triggerSignIn, result] = useSignInMutation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerSignUp, result2] = useSignUpMutation();

  const onSubmitLogin = () => {
    try {
      setErrorMail("");
      setErrorPassword("");
      const validation = loginSchema.validateSync({ email, password });
      triggerSignIn({ email, password });
    } catch (err) {
        alert("There was an error.")
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  const onSubmitSignup = () => {
    try {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");
      const validation = signupSchema.validateSync({
        email,
        password,
        confirmPassword,
      });
      triggerSignUp({ email, password, returnSecureToken: true });
    } catch (err) {
        console.log(err.message);
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  return {
    onSubmitLogin,
    setEmail,
    errorMail,
    setPassword,
    errorPassword,
    setConfirmPassword,
    errorConfirmPassword,
    onSubmitSignup,
    dispatch,
    email,
    result,
    result2
  };
};
