import React from 'react';
import Data from './data.json'


export default function Datatable(){
 

    const columns = Data[0] && Object.keys(Data[0])
    return (
    <table cellPadding={0} cellSpacing={0}>
        <thead>
            <tr>
                <th>Order Id</th>
                <th>Customer Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Order amount</th>
                <th>Order date</th>
                <th>Order Items</th>
            </tr>
        </thead>
        <tbody> 
            {
                Data.map((i) =>
                    <tr key={i}> 
                        <th scope="row">{i.order_id}</th>
                            <td>{i.customer_id}</td>
                            <td>{i.customer_first_name}</td>
                            <td>{i.customer_last_name}</td>
                            <ul>
                               <li><td>{i.customer_address.street}</td></li> 
                               <li><td>{i.customer_address.city}, {i.customer_address.state}</td></li> 
                               <li><td>{i.customer_address.zip}</td></li>
                            </ul>
                            <td>${i.order_amount}</td>
                            <td>{i.order_date}</td>
                            <td>
                            <ul>{i.order_items.map((sub)=>
                                
                                // <li>{sub.description}</li>
                                <li>{sub.name}</li>
                            )}</ul>
                            </td>
                           
                            
                    </tr>
                )

            }
           
           
            
        </tbody>
    </table>
    )
}