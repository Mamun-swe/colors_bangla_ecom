import React, { useEffect, useState } from 'react';
import '../../styles/top-selling.scss';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';
import Loader from '../../Components/Loader';
import ProductImg from '../../assets/images/product_2.jpg';

const TopSellingProductsComponent = ({ categories }) => {
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState(8)
    const [products, setProducts] = useState([])
    const [id, setId] = useState(1)
    const productsPerPage = 8

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${apiURL}posts?userId=${id}`)
                setProducts(response.data)
                setLimit(8)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts()
    }, [id])


    return (
        <div className="top-selling">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-upperrcase">browse top selling products</h1>
                    </div>

                    <div className="col-12 text-center">
                        <div className="top-selling-buttons">
                            {categories.length > 0 && categories.slice(0, 6).map((category, i) =>
                                <button
                                    type="button"
                                    className="btn shadow-none"
                                    key={i}
                                    onClick={() => setId(category.id)}
                                >
                                    {category.name.slice(0, 10)}
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className="row products mt-4">
                    {loading ?
                        <div className="col-12 py-3 text-center">
                            <Loader />
                        </div>
                        : products.length > 0 && products.slice(0, limit).map((product, i) =>
                            <div className="col-6 col-md-4 col-lg-3" key={i}>
                                <div className="card rounded-0 product-card">
                                    <div className="card-body">
                                        <div className="img-box">
                                            <img src={ProductImg} className="img-fluid" alt="..." />
                                        </div>
                                        <div className="footer border">
                                            <div className="d-sm-flex">
                                                <div>
                                                    <p className="name">{product.title.slice(0, 15)}</p>
                                                </div>
                                                <div className="ml-auto">
                                                    <p className="price">${product.id}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {products.length <= limit ?
                        null :
                        <div className="col-12 text-center">
                            <button type="button" className="btn shadow-none load-more-btn" onClick={() => setLimit(limit + productsPerPage)}>Load More</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default TopSellingProductsComponent;