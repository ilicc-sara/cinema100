import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

function Nav() {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  console.log(session);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <nav className="bg-brand-midnight flex justify-between items-center mobile:!px-20 max-mobile:!px-10 !py-3">
      <div className="w-[fit-content] flex justify-center items-center mobile:gap-2 max-mobile:gap-1">
        <img
          className="mobile:w-10 mobile:h-10 max-mobile:w-9 max-mobile:w-9"
          src="logo.png"
        />
        <h1 className="text-white font-medium tablet:text-xl mobile:text-lg max-mobile:hidden">
          cinema 100
        </h1>
      </div>

      <div className="text-[#e8f0fe] mobile:text-lg max-mobile:text-base font-medium flex gap-10">
        <p>Welcome back, Guest</p>

        <div
          onClick={() => handleSignOut()}
          className="flex gap-2 cursor-pointer"
        >
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

export default Nav;
