import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { createUser } from "../../services/UserService.js";

const inputClasses =
  "mt-2 w-full rounded-xl border border-[#8f7a3d]/40 bg-[#e6dcc3] px-4 py-3 text-sm text-[#123128] outline-none transition placeholder:text-[#6a6a56] focus:border-[#8f7a3d] focus:bg-[#dcccab] focus:ring-2 focus:ring-[#8f7a3d]/15";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignUpPage = () => {
  const navigate = useNavigate();
  
  // Initialize state with all required fields from the API logic
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    contactNumber: "",
    email: "",
    username: "",
    password: "",
    address: "",
    type: "editor",
    isActive: true,
  });

  // Handle form submission and API call
  const handleSaveUser = async (e) => {
    e.preventDefault();
    try {
      await createUser(newUser);
      alert("Account created successfully!");
      navigate('/auth/signin'); 
    } catch (error) {
      console.error("Error saving user:", error);
      alert("Error: " + (error.response?.data?.message || "Failed to create account"));
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-[#16392e] sm:text-4xl">
        Sign Up
      </h1>
      <p className="mt-3 text-sm leading-6 text-[#2f473d]">
        Create your account using a cohesive green and gold visual style for a
        polished onboarding experience.
      </p>

      {/* Added onSubmit handler to the form */}
      <form className="mt-8 space-y-5" onSubmit={handleSaveUser}>
        
        {/* Name Row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-semibold tracking-wide text-[#1f3d33]">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="Juan"
              autoComplete="given-name"
              className={inputClasses}
              value={newUser.firstName}
              onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-semibold tracking-wide text-[#1f3d33]">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Dela Cruz"
              autoComplete="family-name"
              className={inputClasses}
              value={newUser.lastName}
              onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Age and Gender Row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-age" className="text-sm font-semibold tracking-wide text-[#1f3d33]">
              Age
            </label>
            <input
              id="signup-age"
              type="number"
              placeholder="25"
              className={inputClasses}
              value={newUser.age}
              onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="signup-gender" className="text-sm font-semibold tracking-wide text-[#1f3d33]">
              Gender
            </label>
            <select
              id="signup-gender"
              className={`${inputClasses} ${newUser.gender === "" ? "text-[#6a6a56]" : "text-[#123128]"}`}
              value={newUser.gender}
              onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        {/* Contact and Address Row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-contact" className="text-sm font-semibold tracking-wide text-[#1f3d33]">
              Contact Number
            </label>
            <input
              id="signup-contact"
              type="text"
              placeholder="09xxxxxxxxx"
              className={inputClasses}
              value={newUser.contactNumber}
              onChange={(e) => setNewUser({ ...newUser, contactNumber: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="signup-address" className="text-sm font-semibold tracking-wide text-[#1f3d33]">
              Address
            </label>
            <input
              id="signup-address"
              type="text"
              placeholder="City, Province"
              className={inputClasses}
              value={newUser.address}
              onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
            />
          </div>
        </div>

        {/* Email and Username Row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-email" className="text-sm font-semibold tracking-wide text-[#1f3d33]">
              Email
            </label>
            <input
              id="signup-email"
              type="email"
              placeholder="juandelacruz@gmail.com"
              autoComplete="email"
              className={inputClasses}
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="signup-username" className="text-sm font-semibold tracking-wide text-[#1f3d33]">
              Username
            </label>
            <input
              id="signup-username"
              type="text"
              placeholder="juan_delacruz"
              className={inputClasses}
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="signup-password" className="text-sm font-semibold tracking-wide text-[#1f3d33]">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="1234abcd!@#$"
            autoComplete="new-password"
            className={inputClasses}
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            required
          />
          <p className="mt-2 text-xs leading-5 text-[#5e6a58]">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          className={`${actionButtonClassName} !border-[#1f5c44] !bg-[#1f5c44] !text-[#f7f3e8] hover:!bg-[#194a38]`}
        >
          Create Account
        </Button>

        <div className="flex items-center py-2">
          <div className="flex-1 h-px bg-[#8f7a3d]/30"></div>
          <span className="px-4 text-[9px] font-bold tracking-[0.2em] text-[#6f5c28] uppercase">Or sign up with</span>
          <div className="flex-1 h-px bg-[#8f7a3d]/30"></div>
        </div>

        {/* Social Auth Buttons */}
        <div className="grid gap-3 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            className={`${actionButtonClassName} !border-[#8f7a3d]/65 !bg-[#e9dfc6] !text-[#1f3d33] hover:!bg-[#dfd2b3]`}
          >
            Sign Up with Google
          </Button>
          <Button
            type="button"
            variant="secondary"
            className={`${actionButtonClassName} !border-[#8f7a3d]/65 !bg-[#e9dfc6] !text-[#1f3d33] hover:!bg-[#dfd2b3]`}
          >
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-[#8f7a3d]/30 pt-6 text-sm text-[#2f473d]">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-semibold text-[#6f5c28] transition hover:text-[#1f5c44]"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;