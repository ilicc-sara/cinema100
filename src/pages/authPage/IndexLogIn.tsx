import { useState } from "react";
import { Link } from "react-router";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

function AuthLogIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // napraviti dve posebne stranice za log in i sign up
  return (
    <section className="min-h-screen !mt-[5%]">
      <div className="w-[fit-content] !mx-auto flex justify-center items-center gap-2">
        <img className="w-12 h-12" src="logo.png" />
        <h1 className="text-white font-medium text-xl">cinema 100</h1>
      </div>

      <form className="w-104 h-[fit-content] !px-14 !py-9 flex flex-col bg-[#161d2f] !mx-auto items-center gap-5 rounded-xl !my-5">
        <h1 className="text-[#e8f0fe] text-3xl self-start">Log In</h1>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          handleOnChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          handleOnChange={(e) => setPassword(e.target.value)}
        />

        <Button variation="auth-button">Log In</Button>

        <div className="flex flex-col gap-2">
          <p className="text-[#e8f0fe]">
            Don't have an account ?{" "}
            <Link to="/signup">
              <span className="text-[#fc4747] cursor-pointer">Sign up</span>
            </Link>
          </p>
          <p className="text-[#e8f0fe]">
            Or,
            <Link to="/">
              <span className="text-[#fc4747] cursor-pointer">
                &nbsp; Log in as guest
              </span>
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default AuthLogIn;
