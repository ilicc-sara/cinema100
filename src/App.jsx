import { useState, useEffect } from "react";
import Article from "./Article";
import "./App.css";
import { formatDistance, subDays, formatDistanceToNow } from "date-fns";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function App() {
  const [videos, setVideos] = useState(null);

  const [categories, setCategories] = useState([
    { icon: "home", name: "Home", id: "New" },
    { icon: "flame", name: "Trending", id: "Trending" },
    { icon: "code-slash", name: "Coding", id: "coding" },
    { icon: "logo-javascript", name: "Javascript", id: "java%script" },
    { icon: "logo-react", name: "ReactJS", id: "reactJS" },
    { icon: "musical-notes", name: "Music", id: "music" },
    { icon: "book", name: "Education", id: "education" },
    { icon: "mic", name: "Podcast", id: "podcast" },
    { icon: "film", name: "Movie", id: "movie" },
    { icon: "game-controller", name: "Gaming", id: "gaming" },
    { icon: "pulse", name: "Live", id: "live" },
    { icon: "football", name: "Sport", id: "sport" },
    { icon: "sparkles", name: "Fashion", id: "fashion" },
    { icon: "diamond", name: "Beauty", id: "beauty" },
  ]);

  const [id, setId] = useState(categories[0].id);

  const { data, isPending, isLoading, error, isFetching } = useQuery({
    queryKey: ["videos", id],
    queryFn: () => renderVideos(id),
  });

  // useEffect(() => {
  //   const url =
  //     "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-key": "37b9fbdafamsh38ae9b00f9888abp1cb0e5jsn54745baf4c79",
  //       "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  //     },
  //   };

  //   const fetchPost = async () => {
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       console.log(result.items);

  //       setVideos(result.items);
  //     } catch (error) {
  //       console.error(error);
  //       setVideos([]);
  //     }
  //   };

  //   fetchPost();
  // }, []);

  // function formatDate(string) {
  //   const index = string.indexOf("T");

  //   let day = new Date().getDate();
  //   let month = new Date().getMonth() + 1;
  //   let year = new Date().getFullYear();

  //   const dateOfUploading = string.slice(0, index).split("-");
  //   let yearOfUploading = Number(dateOfUploading[0]);
  //   let monthOfUploading = Number(dateOfUploading[1]);
  //   let dayOfUploading = Number(dateOfUploading[2]);

  //   let yearDifference = year - yearOfUploading;
  //   let monthDifference = month - monthOfUploading;
  //   let daysDifference = day - dayOfUploading;

  //   if (year > yearOfUploading) {
  //     return yearDifference === 1
  //       ? `${yearDifference} year ago`
  //       : `${yearDifference} years ago`;
  //   }
  //   if (Number(year) === yearOfUploading && month !== monthOfUploading) {
  //     return monthDifference === 1
  //       ? `${monthDifference} month ago`
  //       : `${monthDifference} months ago`;
  //   }
  //   if (
  //     Number(year) === yearOfUploading &&
  //     Number(month) === monthOfUploading
  //   ) {
  //     if (daysDifference === 0) {
  //       return "Today";
  //     }
  //     if (daysDifference === 1) {
  //       return "1 day ago";
  //     }
  //     if (daysDifference < 7) {
  //       return `${daysDifference} days ago`;
  //     }
  //     if (daysDifference === 7 || (daysDifference > 7 && daysDifference < 14)) {
  //       return `1 week  ago`;
  //     }
  //     if (daysDifference > 14 && daysDifference < 21) {
  //       return `2 weeks ago`;
  //     }
  //     if (daysDifference > 21) {
  //       return "3 weeks ago";
  //     }
  //   }
  // }

  function formatDate(string) {
    const index = string.indexOf("T");

    const dateOfUploading = string.slice(0, index).split("-");

    const timeAgo = formatDistanceToNow(dateOfUploading, { addSuffix: true });

    return timeAgo.replace("about ", "");
  }

  return (
    <>
      <h1 href="#">YouTube</h1>

      <section>
        <aside>
          {categories.map((category, index) => (
            <a key={index} onClick={() => setId(category.id)}>
              <ion-icon
                name={
                  category.icon.includes("logo")
                    ? `${category.icon}`
                    : `${category.icon}-outline`
                }
              ></ion-icon>
              {category.name}
            </a>
          ))}
        </aside>

        <main className="video-container">
          {isPending && <div>Loading...</div>}

          {data?.items?.map((video, index) => (
            <Article
              key={index}
              thumbnail={video.snippet.thumbnails.default.url}
              title={video.snippet.title}
              chanel={video.snippet.channelTitle}
              time={formatDate(video.snippet.publishedAt)}
            />
          ))}
        </main>
      </section>
    </>
  );
}

const renderVideos = async (id) => {
  const response = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?q=${id}&part=snippet,id&maxResults=24&regionCode=US`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "37b9fbdafamsh38ae9b00f9888abp1cb0e5jsn54745baf4c79",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    }
  );
  return await response.json();
};

export default App;
