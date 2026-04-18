import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-[#0b2219] text-[#10251f]">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="relative hidden overflow-hidden border-r-2 border-[#8f7a3d]/35 lg:block">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b2219] via-[#123128] to-[#0b2219]" />
          <div className="absolute inset-0 z-10 flex items-center justify-center p-10">
            <img
              src={logo}
              alt="Christopher's Studio Logo"
              className="w-[72%] max-w-[420px] rounded-[2rem] object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>

        <main className="flex items-center bg-[#e8ddc6] px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md rounded-3xl border border-[#8f7a3d]/35 bg-[#e9dfca] p-7 shadow-[0_16px_40px_-24px_rgba(16,37,31,0.45)] sm:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
