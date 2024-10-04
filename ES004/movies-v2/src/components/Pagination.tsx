import React from 'react';

interface IPaginationProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination : React.FC<IPaginationProps> = ({page, setPage}) => {

    const Previous = () => {
        setPage(page !== 1 ? page - 1 : page);
    };

    const Next = () => {
        setPage(page < 10 ? page + 1 : page);
    };

    return(
        <>
        <div className="my-3 d-flex justify-content-between align-items-center">
            <button className="px-3 py-1 m-1 text-center btn-primary" onClick={Previous}>
                Previous
            </button>
            <button className="px-3 py-1 m-1 text-center btn-primary" onClick={Next}>
                Next
            </button>
        </div>
        </>
    )
};

export default Pagination;