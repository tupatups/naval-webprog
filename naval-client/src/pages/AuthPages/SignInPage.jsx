import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { loginUser } from "../../services/UserService";

const inputClasses =
  "mt-2 w-full rounded-xl border border-[#8f7a3d]/40 bg-[#e6dcc3] px-4 py-3 text-sm text-[#123128] outline-none transition placeholder:text-[#6a6a56] focus:border-[#8f7a3d] focus:bg-[#dcccab] focus:ring-2 focus:ring-[#8f7a3d]/15";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      console.log("Login successful:", data);

      // 🔒 Block viewers from logging in
      if (data.type === "viewer") {
        setError("Access denied. Viewers are not allowed to log in.");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("firstName", data.firstName);
      localStorage.setItem("type", data.type);

      navigate("/dashboard", {
        state: { firstName: data.firstName, type: data.type },
      });
    } catch (err) {
      console.error("Login failed:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-[#16392e] sm:text-4xl">
        Log In
      </h1>
      <p className="mt-3 text-sm leading-6 text-[#2f473d]">
        Access your account with a refined green and gold interface designed for
        clarity and balance.
      </p>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
          {error}
        </p>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleLogin}>
        <div>
          <label
            htmlFor="signin-email"
            className="text-sm font-semibold tracking-wide text-[#1f3d33]">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="juandelacruz@gmail.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signin-password"
            className="text-sm font-semibold tracking-wide text-[#1f3d33]">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="1234abcd!@#$"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-[#5e6a58]">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-[#2f473d]">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-[#8f7a3d]/50 accent-[#1f5c44]"
            />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            className="font-semibold text-[#6f5c28] transition hover:text-[#1f5c44]">
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          className={`${actionButtonClassName} !border-[#1f5c44] !bg-[#1f5c44] !text-[#f7f3e8] hover:!bg-[#194a38]`}>
          Log In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            className={`${actionButtonClassName} !border-[#8f7a3d]/65 !bg-[#e9dfc6] !text-[#1f3d33] hover:!bg-[#dfd2b3]`}>
            Log In with Google
          </Button>
          <Button
            type="button"
            variant="secondary"
            className={`${actionButtonClassName} !border-[#8f7a3d]/65 !bg-[#e9dfc6] !text-[#1f3d33] hover:!bg-[#dfd2b3]`}>
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-[#8f7a3d]/30 pt-6 text-sm text-[#2f473d]">
        No account yet?{" "}
        <Link
          to="/auth/signup"
          className="font-semibold text-[#6f5c28] transition hover:text-[#1f5c44]">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;