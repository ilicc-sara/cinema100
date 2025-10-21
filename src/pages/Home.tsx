import React from "react";

function Home() {
  return (
    <nav className="bg-[#161d2f] flex justify-between items-center !px-20 !py-3">
      <div className="w-[fit-content] flex justify-center items-center gap-2">
        <img className="w-10 h-10" src="logo.png" />
        <h1 className="text-white font-medium text-xl">cinema 100</h1>
      </div>

      <div className="text-[#e8f0fe] font-medium flex gap-5">
        <p>Welcome back, Guest</p>

        <div className="flex gap-2">
          <p>Log out</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.0"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Home;
