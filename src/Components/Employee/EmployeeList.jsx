import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../Redux/Slice/employeeSlice';

function EmployeeList() {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.data);
    const status = useSelector((state) => state.users.status);
    const error = useSelector((state) => state.users.error);
    console.log(users);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [dispatch, status]);

    return (
        <div>
            {users.products && users.products.length > 0 ? (
                <table className="table table-striped table-hover" border="1">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Status</th>
                            <th>Warranty</th>
                            <th>Return Policy</th>
                            <th>Min Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.products.map((item, index) => (
                            <tr key={index}>
                                <td style={{ 'width': '14%' }}>
                                    <img className="img-thumbnail rounded mx-auto d-block" src={item.thumbnail} alt="Thumbnail"></img>
                                </td>
                                <td style={{ 'width': '10%' }}><p style={{ 'color': 'black', 'fontWeight': 'bolder' }}>{item.title}</p><br /><p style={{ 'color': 'darkturquoise' }}>{item.description}</p></td>
                                <td style={{ 'width': '10%' }}>{item.category}</td>
                                <td style={{ 'width': '10%' }}>{item.brand}</td>
                                <td style={{ 'width': '10%' }}>{item.availabilityStatus}</td>
                                <td style={{ 'width': '10%' }}>{item.warrantyInformation}</td>
                                <td style={{ 'width': '10%' }}>{item.returnPolicy}</td>
                                <td style={{ 'width': '10%' }}>{item.minimumOrderQuantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default EmployeeList;