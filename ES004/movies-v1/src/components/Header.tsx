import React from 'react';

const Header : React.FC = () => {
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="d-flex justify-content-center align-items-center w-100 text-uppercase p-3 header">
                    <i className="fas fa-video">
                    </i>&nbsp;&nbsp;
                    Database Film
                </div>
            </div>
        </div>
        </>
    )
};

export default Header;