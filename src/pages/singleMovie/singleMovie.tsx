import React from "react";
import { useLocation } from "react-router";
import YouTube from "react-youtube";

function SingleMovie() {
  const location = useLocation();

  console.log(location.state);

  return (
    <section>
      <div className="w-[80%] !mx-auto">
        <YouTube
          videoId={location.state.trailer.replace(
            "https://www.youtube.com/embed/",
            ""
          )}
        />
      </div>
    </section>
  );
}

export default SingleMovie;
