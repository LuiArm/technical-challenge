import React from 'react';
import Data from './data.json';

export default function Posts () {

    return (
    <ul> className="list-group mb-4"
             {Data.map(i =>
            <li key ={i.order_id} className="list-group-item">
                {i.customer_id}
            </li>
            )}

    </ul>
   
    )
}