import React, { useEffect, useState } from 'react';
import { img_300, unavailable } from '../components/Config';
import Pagination from '../components/Pagination'; 
import { ITrendingItem } from '../interfaces/ITrending';

interface ITrendingApiResponse {
    results: ITrendingItem[];
};

const Trending: React.FC = () => {
    const [state, setState] = useState<ITrendingItem[]>([]);
    const [page, setPage] = useState<number>(1);

    const fetchTrending = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=3d820eab8fd533d2fd7e1514e86292ea&page=${page}`);
        const  retJson : ITrendingApiResponse = await data.json();

        setState(retJson.results);
    };
    
    useEffect(
        () => {
            fetchTrending();
        },
        [page]
    );

    console.log("Tranding", state);

    return(
        <>
            <div className="container">
                <div className="row py-5 my-5">
                    <div className="col-12 mt-2 mb-4 fs-1 fw-bold text-decoration-underline head d-flex justify-content-center align-items-center">
                        <i className="fas fa-fire mx-4 text-danger"></i>
                        <h4 className="fs-2">Trending Today</h4>
                        <i className="fas fa-fire mx-4 text-danger"></i>
                    </div>
                    {
                        state.map(
                            (item: ITrendingItem) => {
                                const {
                                    id, name, title, poster_path, first_air_date, release_date, media_type
                                } = item;
                                return(
                                    <>
                                        <div key={id} id="card" className="col-md-3 col-sm-4 py-3 d-flex justify-content-center g-4">
                                            <div className="card bg-dark">
                                                <img 
                                                    src={poster_path ? `${img_300}/${poster_path}` : unavailable} 
                                                    className="card-img-top pt-3 pb-0 px-3"
                                                    alt={title}
                                                 />
                                                <div className="card-body">
                                                    <h5 className="card-title text-center fs-5">{title || name}</h5>
                                                    <div className="d-flex fs-6 align-items-center justify-content-evenly movie">
                                                        <div>{media_type === "tv" ? "TV" : "Movie"}</div>
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
}

export default Trending;