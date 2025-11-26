import { useLocation } from "react-router";
import YouTube from "react-youtube";

function SingleMovie() {
  const location = useLocation();

  return (
    <section>
      <div className="smallLT:w-[70%] tablet:w-[80%] max-tablet:w-[85%] !mx-auto flex text-[#e8f0fe] text-left justify-between items-center !my-5">
        <div>
          <p className="text-xl "> {location.state.title} </p>
          <span> ({location.state.year}) </span>
          <img
            src={location.state.image}
            className="h-full min-tablet:hidden "
          />
        </div>

        <div className="flex max-tablet:flex-col gap-5">
          <div>
            <p className="text-xl "> Imdb rating </p>
            <p>
              <i className="bxr  bxs-star"></i>{" "}
              <span className="font-medium"> {location.state.rating} </span> /
              10
            </p>
          </div>
          <div>
            <p className="text-xl "> Rank </p>
            <p>
              {" "}
              <span className="font-medium"> {location.state.rank} </span> / 100{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="smallLT:w-[70%] tablet:w-[80%] max-tablet:w-[85%] !mx-auto tablet:grid tablet:grid-cols-[1.1fr_3fr]  gap-4">
        <img src={location.state.image} className="h-full max-tablet:hidden " />
        <div className="w-full aspect-video overflow-hidden">
          <YouTube
            className="w-full h-full"
            videoId={location.state.trailer.replace(
              "https://www.youtube.com/embed/",
              ""
            )}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                mute: 1,
                controls: 1,
                modestbranding: 1,
              },
            }}
          />
        </div>
      </div>
      <div className="smallLT:w-[70%] tablet:w-[80%] max-tablet:w-[85%] !mx-auto">
        <div className=" flex flex-col text-[#e8f0fe] text-left items-start !my-5 gap-4 w-[70%]">
          <p className="text-xl font-medium"> {location.state.genre} </p>
          <p> {location.state.description} </p>
          <hr className="w-full border-t border-[#fff] flex-1 mx-4" />
          <p className="text-xl font-medium"> Director </p>
          <p> {location.state.director.replace(",", ", ")} </p>
          <hr className="w-full border-t border-[#fff] flex-1 mx-4" />
          <p className="text-xl font-medium"> Writers </p>
          <p> {location.state.writers.replace(",", ", ")} </p>
        </div>
      </div>
    </section>
  );
}

export default SingleMovie;
