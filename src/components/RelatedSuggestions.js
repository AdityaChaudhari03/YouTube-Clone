import React, { useEffect, useState } from "react";
import { RELATED_SEARCH } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";

const RelatedSuggestions = () => {
  const [params] = useSearchParams();
  const videoId = params.get("v");
  const [relatedResults, setRelatedResults] = useState([]);

  useEffect(() => {
    getRelatedVideos();
  }, [videoId]);

  const getRelatedVideos = async () => {
    const data = await fetch(RELATED_SEARCH + videoId);
    const json = await data.json();
    setRelatedResults(json?.items);
  };

  return (
    <div className="my-2 mx-2 p-2">
      {relatedResults?.map((video) => (
        <Link
          to={"/watch?v=" + video?.id?.videoId}
          key={video?.id?.videoId}
          className="block mb-2 last:mb-0"
        >
          <SuggestionCard videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default RelatedSuggestions;
