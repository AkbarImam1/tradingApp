import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';

function Card(props) {
    const { image, title, price, rating } = props.itemData;
    const indianRuppes = price*80;
    return (
        <>  
            <div class="card col-3 w-25 m-1  border ">
                <img src={image} class="card-img-top w-50 m-auto mt-1 p-1" height={100} width={100} alt="..." />
                <div class="card-body">
                    <div className="row">
                        <div className="col-12 text-truncate">
                            {title}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-bold">
                            RS:{indianRuppes.toFixed(2)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Rating
                                name="text-feedback"
                                value={rating.rate}
                                readOnly
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            
                        </div>
                       
                    </div>
                    <div className='row'>
                    <div className="col-12">
                            {rating.count} <p className='text-muted d-inline'>reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Card