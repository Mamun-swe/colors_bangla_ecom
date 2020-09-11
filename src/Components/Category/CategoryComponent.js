import React from 'react';
import '../../styles/category.scss';
import { Link } from 'react-router-dom';
import CategoryImg from '../../assets/images/t-shirt.jpg';

const CategoryComponent = ({ categories }) => {
    return (
        <div className="category-component">
            <div className="container">
                <div className="row">

                    {categories.length > 0 && categories.slice(0, 6).map((category, i) =>
                        <div className="col-6 col-lg-4" key={i}>
                            <Link to="/">
                                <div className="card border-0 rounded-0 category-card">
                                    <img src={CategoryImg} className="img-fluid" alt="..." />
                                    <div className="overlay">
                                        <div className="flex-center flex-column">
                                            <h2 className="mb-0">{category.name.slice(0, 6)}</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryComponent;