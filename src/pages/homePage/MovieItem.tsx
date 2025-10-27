import type { singleMovie } from "../../types";
import { Link } from "react-router";

type MovieItemProps = {
  item: singleMovie;
  index: number;
  details: boolean;
};

function MovieItem({ item, index, details }: MovieItemProps) {
  return (
    <Link to={item.imdbid} relative="path">
      <article className="text-[#e8f0fe] flex flex-col gap-2">
        <img className="" key={index} src={item.image} />

        <div className={`!mt-auto ${details ? "visible" : "invisible"}`}>
          <p className="text-base text-left font-medium w-full truncate">
            {" "}
            {item.title}{" "}
          </p>
          <div className="flex justify-start items-center">
            <span> {item.year} </span>
            <div className="flex items-center !px-2 gap-1">
              <i className="bxr  bxs-star"></i>
              <span> {item.rating} </span>
            </div>
            <span className="w-full truncate"> {item.genre} </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default MovieItem;
