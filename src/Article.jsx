import React from "react";

function Article(props) {
  const { thumbnail, title, chanel, time } = props;

  return (
    <article className="video-article">
      <img className="thumbnail" src={thumbnail} />
      <p className="title">{title}</p>
      <p className="chanel">{chanel}</p>
      <p className="time-uploaded">{time}</p>
    </article>
  );
}

export default Article;
