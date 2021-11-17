import React from 'react';
import './table.css'


const Datatable = ({ posts }) => {
 console.log(posts)


    const columns = posts[0] && Object.keys(posts[0])
    return (
    <table cellPadding={8} cellSpacing={0}>
        <thead>
            <tr>
                <th>Order Id</th>
                <th>Customer Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Order amount</th>
                <th>Order date</th>
                <th>Ordered Items</th>
            </tr>
        </thead>
        <tbody> 
            {
                posts.map((i) =>
                    <tr key={i}> 
                        <th scope="row">{i.order_id}</th>
                            <td>{i.customer_id}</td>
                            <td>{i.customer_first_name}</td>
                            <td>{i.customer_last_name}</td>
                            <ul style={{listStyleType: "none" }}>
                               <li><td>{i.customer_address.street}</td></li> 
                               <li><td>{i.customer_address.city}, {i.customer_address.state}-{i.customer_address.zip}</td></li> 
                              
                            </ul>
                            <td>${i.order_amount}</td>
                            <td>{i.order_date}</td>
                            <td>
                            <select>{i.order_items.map((sub)=>
                                <option>{sub.name}({sub.id}), 
                                 ${sub.price}, {sub.quantity}, 
                                 {sub.description}</option>
                            )}</select>
                            </td>      
                   </tr>
                )

            }
           
           
            
        </tbody>
    </table>
    )
}

export default Datatable;