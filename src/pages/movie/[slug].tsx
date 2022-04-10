import React from "react";
import { useRouter } from "next/router";

const Movie = () => {
  const router = useRouter();
  const { pid } = router.query;
  console.log("pid", pid);

  return <p>Movie: {pid}</p>;
};

export default Movie;
