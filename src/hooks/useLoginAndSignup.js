/* useLoginAndSignup */

import { useState, useEffect } from "react";
import { useSignInMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
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

  console.log(result);
  console.log(result2);

  useEffect(() => {
    if (result.isSuccess ?? result2.isSuccess) {
      console.log("muestrame el resultado: ", result ?? result2);
      dispatch(
        setUser({
          email: result.data.email ?? result2.data.email,
          idToken: result.data.idToken ?? result2.data.idToken,
          localId: result.data.localId ?? result2.data.localId,
        })
      );
    }
  }, [result ?? result2]);

  const onSubmitLogin = () => {
    try {
      setErrorMail("");
      setErrorPassword("");
      const validation = loginSchema.validateSync({ email, password });
      triggerSignIn({ email, password });
    } catch (err) {
      console.log("Entro al signup el error");
      console.log(err.path);
      console.log(err.message);
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
      console.log("Entro al signup el error");
      console.log(err.path);
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
  };
};
