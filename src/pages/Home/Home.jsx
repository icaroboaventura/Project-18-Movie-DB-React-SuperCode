import { useEffect, useState } from "react";
import { moviesData } from "../../assets/moviesData";
import StarRating from "../../components/StarRating/StarRating";

const Home = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filterOption, setFilterOption] = useState("");

  useEffect(() => {
    movies.sort((a, b) => {
      if (filterOption === "asc") {
        return a.year - b.year;
      } else if (filterOption === "desc") {
        return b.year - a.year;
      } else if (filterOption === "rate") {
        return b.rate - a.rate;
      } else if (filterOption === "az") {
        return ("" + a.title).localeCompare(b.title);
      } else {
        return ("" + b.title).localeCompare(a.title);
      }
    });
    setMovies([...movies]);
  }, [filterOption]);

  return (
    <>
      <section className="flex items-center justify-center gap-4 py-7 font-gillSans">
        <button className="bg-yellow-400 text-yellow-100 rounded-xl p-2" onClick={() => setFilterOption("asc")}>
          Date Ascending
        </button>
        <button className="bg-yellow-400 text-yellow-100 rounded-xl p-2" onClick={() => setFilterOption("desc")}>
          Date Desending
        </button>
        <button className="bg-yellow-400 text-yellow-100 rounded-xl p-2" onClick={() => setFilterOption("rate")}>
          Best Rate
        </button>
        <button className="bg-yellow-400 text-yellow-100 rounded-xl p-2" onClick={() => setFilterOption("az")}>
          A-Z
        </button>
        <button className="bg-yellow-400 text-yellow-100 rounded-xl p-2" onClick={() => setFilterOption("za")}>
          Z-A
        </button>
      </section>
      <section className="flex flex-wrap items-center justify-center gap-10 font-gillSans">
        {movies.map((movie, index) => (
          <div key={index} className="bg-slate-500 w-52 h-72 p-3 flex flex-col text-center rounded-xl">
            <h1 className="text-xl font-bold text-yellow-400">{movie.title}</h1>
            <p className="text-yellow-100">{movie.year}</p>
            <p className="text-yellow-100">{movie.director}</p>
            <p className="text-yellow-100">{movie.duration}</p>
            {movie.genre.map((singleGenre, index) => (
              <p className="text-yellow-100" key={index}>
                {singleGenre}
              </p>
            ))}
            <StarRating rating={movie.rate} />
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
