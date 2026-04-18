import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border border-[#8f7a3d]/40 bg-[#e6dcc3] px-4 py-3 text-sm text-[#123128] outline-none transition placeholder:text-[#6a6a56] focus:border-[#8f7a3d] focus:bg-[#dcccab] focus:ring-2 focus:ring-[#8f7a3d]/15";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignUpPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-[#16392e] sm:text-4xl">
        Sign Up
      </h1>
      <p className="mt-3 text-sm leading-6 text-[#2f473d]">
        Create your account using a cohesive green and gold visual style for a
        polished onboarding experience.
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="text-sm font-semibold tracking-wide text-[#1f3d33]">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="Juan"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="text-sm font-semibold tracking-wide text-[#1f3d33]">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Dela Cruz"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="signup-email"
            className="text-sm font-semibold tracking-wide text-[#1f3d33]">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="juandelacruz@gmail.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signup-password"
            className="text-sm font-semibold tracking-wide text-[#1f3d33]">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="1234abcd!@#$"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-[#5e6a58]">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <Button
          type="submit"
          variant="primary"
          className={`${actionButtonClassName} !border-[#1f5c44] !bg-[#1f5c44] !text-[#f7f3e8] hover:!bg-[#194a38]`}>
          Create Account
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            className={`${actionButtonClassName} !border-[#8f7a3d]/65 !bg-[#e9dfc6] !text-[#1f3d33] hover:!bg-[#dfd2b3]`}>
            Sign Up with Google
          </Button>
          <Button
            type="button"
            variant="secondary"
            className={`${actionButtonClassName} !border-[#8f7a3d]/65 !bg-[#e9dfc6] !text-[#1f3d33] hover:!bg-[#dfd2b3]`}>
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-[#8f7a3d]/30 pt-6 text-sm text-[#2f473d]">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-semibold text-[#6f5c28] transition hover:text-[#1f5c44]">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
