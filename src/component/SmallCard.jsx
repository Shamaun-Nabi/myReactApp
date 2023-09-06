import React from 'react'
// import { HiCheckBadge } from "react-icons/hi";


const SmallCard = (props) => {
    const {title,year,work,icon}=props;
    return (
        <div>
            <div className="card w-96  my-2 border-2 border-slate-600 text-center rounded-3xl">
                <div className="card-body">
                
                    <h2 className="card-title flex justify-center text-3xl">
                    {icon}
                    </h2>
                    <h1 className='font-bold text-3xl'>{title}</h1>
                    <p>{year}</p>
                    <p>{work}</p>

                </div>
            </div>
        </div>
    )
}

export default SmallCard