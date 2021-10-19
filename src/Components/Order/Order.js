import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './order.png';

const Order = () => {
    return (
        <div>
            
           <div>
           <img src={img1} alt="" />
           </div>
            <div>
            <Link to='/courses'><button className='btn btn-primary mb-3'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default Order;