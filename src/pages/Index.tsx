import { useState } from "react";

function Home() {
  return (
    <section>
      <div className="w-[fit-content] !mx-auto flex justify-center items-center gap-2">
        <img className="w-12 h-12" src="logo.png" />
        <h1 className="text-white font-medium text-xl">cinema 100</h1>
      </div>
      <form className=" w-[fit-content] flex flex-col bg-[#161d2f] !mx-auto items-center">
        <h1>Log In</h1>
        <input
          className="bg-stone-300 w-[80%] rounded"
          type="text"
          placeholder="email"
        />
        <input
          className="bg-stone-300 w-[80%] rounded"
          type="password"
          placeholder="password"
        />
      </form>
    </section>
  );
}

export default Home;
