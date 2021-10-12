import * as React from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { Button } from "components/button";
import { TextField } from "components/text-field";
import { useRegister } from "domains/auth";


export const RegisterForm = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("@gmail.com");
  const [avatarUrl, setavatarUrl] = React.useState("http://");
  const [password, setPassword] = React.useState("");
  const register = useRegister();

  const useRegisterMutation = () => useMutation((data) => register(data));
  const registerMutation = useRegisterMutation();

  return (
    <div className="max-w-md mx-auto m-6 shadow-xl">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          registerMutation.mutate(
            { username, email, avatarUrl, password },
            {
              onSuccess: () => {
                setUsername("");
                setEmail("@gmail.com");
                setavatarUrl("http://");
                setPassword("");
              }
            }
          )}}
        className="p-6 bg-opacity-25 bg-white"
      >
        {registerMutation.isError && (
          <div className="p-2 text-red-800 bg-red-200 rounded-sm">
            Fail to register.
          </div>
        )}
        {registerMutation.isSuccess && (
          <div className="p-2 text-green-800 bg-green-200 rounded-sm">
            Your account has been registered successfully.<br></br>
            Click&nbsp;
              <Link to={"/login"}>
                <span className="text-indigo-600 underline">here</span>
              </Link> to login.
          </div>
        )}
        <div className="text-3xl mt-4 mb-8 font-extrabold text-center text-indigo-600">
          Sign Up
        </div>
        <div className="space-y-6">
        <TextField
            label="Username"
            value={username}
            onChangeValue={setUsername}
            name="username"
            id="username"
            autoFocus
            required
            disabled={registerMutation.isLoading}
          />
          <TextField
            label="Email"
            value={email}
            onChangeValue={setEmail}
            name="email"
            id="email"
            required
            disabled={registerMutation.isLoading}
          />
          <TextField
            label="Avatar URL"
            value={avatarUrl}
            onChangeValue={setavatarUrl}
            name="avatarUrl"
            id="avatarUrl"
            disabled={registerMutation.isLoading}
          />
          <TextField
            label="Password"
            value={password}
            onChangeValue={setPassword}
            name="password"
            id="password"
            type="password"
            required
            disabled={registerMutation.isLoading}
          />
          <Button
            type="submit"
            variant="wideLight"
            className="w-full text-base"
            disabled={registerMutation.isLoading}
          >
            Sign Up
          </Button>
          <div className="flex justify-between
          ">
          <span className="w-8/12">
            <Button
              variant="wideDark"
              disabled={registerMutation.isLoading}
              render={(bProps) => (
                <Link to={"/"} {...bProps}>
                  {bProps.children}
                </Link>
              )}
              >
                Continue as Guest
            </Button>
          </span>
          <span className="w-3/12">
            <Button
              variant="wideDark"
              disabled={registerMutation.isLoading}
              render={(bProps) => (
                <Link to={"/login"} {...bProps}>
                  {bProps.children}
                </Link>
              )}
              >
                Login
            </Button>
          </span>
          </div>
        </div>
      </form>
    </div>
  );
};
