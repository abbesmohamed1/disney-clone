import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};
async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  const movies = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto">

      {/* Azure OPENAI service Suggestion */}

      <div className='flex flex-col space-y-4 mt-32 xl:mt-40'>
        <h1 className="text-6xl font-bold px-10">Results For {genre}</h1>
      </div>

      <MoviesCarousel title={"Genre"} movies={movies} isVertical />

    </div>
  );
}

export default GenrePage;
