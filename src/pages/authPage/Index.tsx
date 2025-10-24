import { useState } from "react";
import { Link } from "react-router";

function Auth() {
  const [logIn, setLogIn] = useState<boolean>(true);

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <section className="min-h-screen !mt-[5%]">
      <div className="w-[fit-content] !mx-auto flex justify-center items-center gap-2">
        <img className="w-12 h-12" src="logo.png" />
        <h1 className="text-white font-medium text-xl">cinema 100</h1>
      </div>
      {logIn && (
        <form className="w-104 h-[fit-content] !px-14 !py-9 flex flex-col bg-[#161d2f] !mx-auto items-center gap-5 rounded-xl !my-5">
          <h1 className="text-[#e8f0fe] text-3xl self-start">Log In</h1>
          <input
            className="bg-[#e8f0fe] w-full rounded h-11 !pl-3"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-[#e8f0fe] w-full rounded h-11 !pl-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#fc4747] w-full rounded h-9 text-[#e8f0fe]">
            Log In
          </button>

          <div className="flex flex-col gap-2">
            <p className="text-[#e8f0fe]">
              Don't have an account ?{" "}
              <span
                onClick={() => setLogIn(false)}
                className="text-[#fc4747] cursor-pointer"
              >
                Sign up
              </span>
            </p>
            <p className="text-[#e8f0fe]">
              Or,{" "}
              <Link to="/home">
                <span className="text-[#fc4747] cursor-pointer">
                  Log in as guest
                </span>
              </Link>
            </p>
          </div>
        </form>
      )}
      {!logIn && (
        <form className="w-104 h-[fit-content] !px-14 !py-9 flex flex-col bg-[#161d2f] !mx-auto items-center gap-5 rounded-xl !my-5">
          <h1 className="text-[#e8f0fe] text-3xl self-start">Sign Up</h1>
          <input
            className="bg-[#e8f0fe] w-full rounded h-11 !pl-3"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bg-[#e8f0fe] w-full rounded h-11 !pl-3"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="bg-[#e8f0fe] w-full rounded h-11 !pl-3"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-[#e8f0fe] w-full rounded h-11 !pl-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#fc4747] w-full rounded h-9 text-[#e8f0fe]">
            Sign Up
          </button>

          <div className="flex flex-col gap-2">
            <p className="text-[#e8f0fe]">
              Already have an account?
              <span
                onClick={() => setLogIn(true)}
                className="text-[#fc4747] cursor-pointer"
              >
                {" "}
                Log In
              </span>
            </p>
          </div>
        </form>
      )}
    </section>
  );
}

export default Auth;
