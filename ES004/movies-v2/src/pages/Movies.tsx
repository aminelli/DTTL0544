import React, { useEffect, useState } from 'react';
import useGenre from '../utils/useGenre';
import { ITrendingItem } from '../interfaces/ITrending';
import { img_300, unavailable } from '../components/Config';
import Pagination from '../components/Pagination'; 
import Genre from '../components/Genre';

const Movies: React.FC = () => {

    const [state,  setState] = useState<any[]>([]);
    const [page,  setPage] = useState<number>(1);
    const [genre,  setGenre] = useState<any[]>([]);
    const [value,  setValue] = useState<any[]>([]);
    
    const genreUrl = useGenre(value); 

    const fetchTrending = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=it-IT&sort_by=popularity.desc&include_adult=false&include_video=false&page=
${page}&with_genres=${genreUrl}`);

        const  retJson = await data.json();

        setState(retJson.results);
    };
    
    useEffect(
        () => {
            fetchTrending();
        },
        [page, genreUrl]
    );
    
    return(
        <>
        <div className="container">
            <div className="row py-5 my-5">
                <div className="col-12 text-center mt-2 mb-4 fs-1 fw-bold text-decoration-underline">
                    Movies
                </div>
                <Genre
                    genre={genre}
                    setGenre={setGenre}
                    setPage={setPage}
                    type="movie"
                    value={value}
                    setValue={setValue}
                />
                {
                    state.map(
                        (item: ITrendingItem) => {
                            const {
                                id, name, title, poster_path, first_air_date, release_date, media_type
                            } = item;
                            return(
                                <>
                                   <div className="col-md-3 col-sm-4 py-3" id="card" key={id}>
                                        <div className="card bg-dark" >
                                            <img
                                            src={
                                                poster_path ? `${img_300}/${poster_path}` : unavailable
                                            }
                                            className="card-img-top pt-3 pb-0 px-3"
                                            alt={title || name}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-center fs-5">{title || name}</h5>
                                                <div className="d-flex fs-6 align-items-center justify-content-evenly movie">
                                                    <div>{media_type === "tv" ? "TV Series" : "Movie"}</div>
                                                    <div>{first_air_date || release_date}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    )
                }
                <Pagination page={page} setPage={setPage}/>
            </div>
        </div>
        </>
    );
};

export default Movies;
