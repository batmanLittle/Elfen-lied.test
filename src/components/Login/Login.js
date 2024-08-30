import "./Login.css";
import FormComponent from "../FormComponent/FormComponent";
import arrow from "../../images/arrow-right.svg";

function Login({ handleClose, handleOpen }) {
  const inputsLogin = [
    { name: "e-mail", label: "e-mail", type: "email" },
    { name: "password", label: "пароль", type: "password" },
  ];

  return (
    <section className="login form-component">
      <FormComponent
        inputs={inputsLogin}
        title="Вход"
        textButton="Войти"
        handleClose={() => handleClose("login")}
      />
      <div className="form__footer">
        <p className="form__footer-text small-text">нет аккаунта?</p>
        <button
          className="form__footer-button"
          onClick={() => handleOpen("registr")}
        >
          <p className="form__footer-text small-text">Регистрация</p>
          <img alt="стрелка вправо" src={arrow} />
        </button>
      </div>
    </section>
  );
}

export default Login;
