import { useEffect } from "react";
import { data } from "../data[1]";
import { supabase } from "../supabase-client";

console.log(data[0]);

function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { error } = await supabase
          .from("moviesData")
          .insert({
            rank: 1,
            title: "The Shawshank Redemption",
            thumbnail:
              "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
            rating: "9.3",
            id: "top1",
            year: 1994,
            image:
              "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
            description:
              "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            trailer: "https://www.youtube.com/embed/NmzuHjWmXOc",
            genre: ["Drama"],
            director: ["Frank Darabont"],
            writers: [
              'Stephen King (based on the short novel "Rita Hayworth and the Shawshank Redemption" by)',
              "Frank Darabont (screenplay by)",
            ],
            imdbid: "tt0111161",
          })
          .single();

        if (error) {
          console.error("Error adding task: ", error.message);
        }
      } catch (error: any) {
        console.error("Error adding task: ", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <nav className="bg-[#161d2f] flex justify-between items-center !px-20 !py-3">
      <div className="w-[fit-content] flex justify-center items-center gap-2">
        <img className="w-10 h-10" src="logo.png" />
        <h1 className="text-white font-medium text-xl">cinema 100</h1>
      </div>

      <div className="text-[#e8f0fe] text-lg font-medium flex gap-10">
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
