import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../../Components/Form/login.form";
import { getToken } from "../../../utils/helper";

export const Login: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <>
      <LoginForm></LoginForm>
    </>
  );
};
