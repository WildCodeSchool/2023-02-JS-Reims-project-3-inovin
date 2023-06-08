import { useRef } from "react";
import "../App.scss";

function Register() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailref = useRef();

  return (
    <form
      className="inscription"
      onSubmit={(event) => {
        event.preventDefault();

        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:3000"
          }/users`,
          {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              username: usernameRef.current.value,
              password: passwordRef.current.value,
              email: emailref.current.value,
            }),
          }
        );
      }}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input ref={usernameRef} type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input ref={emailref} type="text" id="email" name="email" />
      </div>
      <button className="submit" type="submit">
        Go
      </button>
    </form>
  );
}

export default Register;
