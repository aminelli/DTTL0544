import React from 'react';
import { NavLink } from 'react-router-dom';

interface INavItem {
    icon: string;
    name: string;
    link: string;
    id: number;
};

const Footer : React.FC = () => {

    const data: INavItem [] = [
        {
            icon: "fas fa-fire-alt",
            name: "Trending",
            link: "/",
            id: 1
        },
        {
            icon: "fas fa-film",
            name: "Film",
            link: "/movies",
            id: 2
        },
        {
            icon: "fas fa-tv",
            name: "Serie Tv",
            link: "/tv",
            id: 3
        },
        {
            icon: "fas fa-search",
            name: "Ricerca",
            link: "/search",
            id: 4
        }
    ];

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center bg-dark footer">
                   {
                    data.map(
                        (item) => {
                            console.log("Footer", item);
                            return (
                                <NavLink to={`${item.link}`} key={item.id}>
                                    <button className="col-sm-2 col-md-2 btn btn-dark">
                                        <i className= {`${item.icon}`} id={`fire-${item.id}`}></i>
                                        <br />
                                    <h5 className="pt-1 fs-6">
                                        {item.name}
                                    </h5>
                                    </button>
                                </NavLink>
                            );
                        }
                    )
                   }
                   <div className="text-white footer-1">
                    Made By: Michela
                   </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Footer;