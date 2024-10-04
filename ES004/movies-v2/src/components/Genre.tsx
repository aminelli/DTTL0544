import { useEffect } from "react";

// Define the type for a single genre object
interface GenreType {
    id: number;
    name: string;
  }
   
  // Define the props type
  interface GenreProps {
    genre: GenreType[];
    setGenre: React.Dispatch<React.SetStateAction<GenreType[]>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    type: string;
    value: GenreType[];
    setValue: React.Dispatch<React.SetStateAction<GenreType[]>>;
  }
   
  const Genre: React.FC<GenreProps> = ({ genre, setGenre, setPage, type, value, setValue }) => {
    const fetchGenre = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=it-IT`
      );
      const { genres }: { genres: GenreType[] } = await data.json(); // Ensure the fetched genres are of type GenreType
      console.log(genres);
      setGenre(genres);
    };
   
    useEffect(() => {
      fetchGenre();
    }, [type]);
   
    // Adding a particular genre to the selected array
    const CategoryAdd = (selectedGenre: GenreType) => {
      setValue([...value, selectedGenre]);
      setGenre(genre.filter((g) => g.id !== selectedGenre.id));
      setPage(1);
    };
   
    // Removing a particular genre from the selected array
    const CategoryRemove = (selectedGenre: GenreType) => {
      setValue(value.filter((g) => g.id !== selectedGenre.id));
      setGenre([...genre, selectedGenre]);
      setPage(1);
    };
   
    return (
      <>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12 d-flex flex-wrap">
              {value &&
                value.map((Val) => {
                  const { id, name } = Val;
                  return (
                    <div className="m-2" key={id}>
                      <button
                        className="bg-dark text-white px-4 py-2 text-center buttons"
                        onClick={() => CategoryRemove(Val)}
                      >
                        {name}
                      </button>
                    </div>
                  );
                })}
   
              {genre &&
                genre.map((Gen) => {
                  const { id, name } = Gen;
                  return (
                    <div className="m-2" key={id}>
                      <button
                        className="bg-dark text-white px-4 py-2 text-center button"
                        onClick={() => CategoryAdd(Gen)}
                      >
                        {name}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    );
  };
   
  export default Genre;