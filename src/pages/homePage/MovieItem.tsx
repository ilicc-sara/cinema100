import React from "react";
import type { singleMovie } from "../../types";

type MovieItemProps = {
  item: singleMovie;
  index: number;
};

function MovieItem({ item, index }: MovieItemProps) {
  return (
    <article className="text-[#e8f0fe] flex flex-col gap-2">
      <img className="" key={index} src={item.image} />

      <div className="!mt-auto">
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
          <span> {item.genre} </span>
        </div>
      </div>
    </article>
  );
}

export default MovieItem;
