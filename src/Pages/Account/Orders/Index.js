import React, { useEffect, useState } from 'react';
import '../../../styles/Account/order.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { apiURL } from '../../../utils/apiURL';
import LoadingComponent from '../../../Components/Loader';

const Index = () => {
    const [isLoading, setLoading] = useState(false)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true)
                const response = await axios.get('http://jsonplaceholder.typicode.com/users')
                setOrders(response.data)
                setLoading(false)
            } catch (error) {
                if (error) console.log(error)
            }
        }

        fetchOrders()
    }, [])

    return (
        <div className="order-index">
            <div className="header text-center mt-3">
                <h5>my orders</h5>
            </div>


            {isLoading ? <LoadingComponent /> :
                <div className="body mb-4">
                    <table className="table table-sm table-borderless table-responsive-sm">
                        <thead>
                            <tr>
                                <td>order</td>
                                <td>date</td>
                                <td>status</td>
                                <td>total</td>
                                <td className="text-right">action</td>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.length > 0 && orders.map((order, i) =>
                                <tr key={i}>
                                    <td><p>#10194</p></td>
                                    <td><p>sep 15, 2020</p></td>
                                    <td><p>processing</p></td>
                                    <td><p>800 tk.</p></td>
                                    <td className="text-right" style={{ minWidth: '150px' }}>
                                        <Link to={`/account/order/${order.id}/status`}
                                            type="button"
                                            className="btn rounded-0 shadow-none view-btn"
                                        >view</Link>
                                        <Link to={`/account/order/${order.id}/status`}
                                            type="button"
                                            className="btn rounded-0 shadow-none btn-light text-dark invoice-btn"
                                        >invoice</Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            }


        </div>
    );
};

export default Index;