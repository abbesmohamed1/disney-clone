import React from "react";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";
export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();


  return (
    <main className="">

      <CarouselBannerWrapper />

      <div className="flex flex-col space-x-2 xl:-ml-48">
      <MoviesCarousel movies={upcomingMovies} title='Upcoming' />
      <MoviesCarousel movies={topRatedMovies} title='Top Rated' />
      <MoviesCarousel movies={popularMovies} title='Popular' />
        
      </div>
    </main>
  );
}
