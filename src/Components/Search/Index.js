import React, { useState } from 'react';
import "../../styles/search.scss";
import { Icon } from 'react-icons-kit';
import { ic_search, ic_call_made } from 'react-icons-kit/md';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Index = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [suggestBox, setSuggestBox] = useState(false);
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const [results, setResults] = useState([]);

    // onChange Search
    const onChnageSearch = event => {
        if (event.target.value) {
            setSuggestBox(true)
            setIsSearchLoading(true)
            axios.get(`${apiURL}comments?postId=${event.target.value}`)
                .then(res => {
                    if (res.data) {
                        setResults(res.data)
                        setSuggestBox(true)
                        setIsSearchLoading(false)
                    }
                })
                .catch(err => {
                    if (err) {
                        console.log(err.response)
                    }
                })
        } else {
            setSuggestBox(false)
            setIsSearchLoading(false)
        }
    }

    const handleClick = data => {
        setSuggestBox(false)
        history.push(`/${data}`)
    }

    // Submit Search
    const onSubmit = data => {
        setSuggestBox(false)
        history.push(`/${data.filterdata}`)
    }

    return (
        <div>
            <div className="search-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        name="filterdata"
                        onChange={onChnageSearch}
                        className={errors.filterdata ? "form-control shadow-none error" : "form-control shadow-none"}
                        placeholder="Enter Your Keyword"
                        ref={register({
                            required: true
                        })}
                    />
                    <Icon icon={ic_search} size={25} className="search-icon" style={{ color: '#555' }} />
                </form>

                {/* Suggest Box */}
                {suggestBox ?
                    <div className="suggest-box shadow">
                        {isSearchLoading ?
                            <div className="search-loading">
                                <div className="container">
                                    <div className="loading-item-1"></div>
                                    <div className="loading-item-2"></div>
                                    <div className="loading-item-3"></div>
                                    <div className="loading-item-4"></div>
                                    <div className="loading-item-5"></div>
                                </div>
                            </div>
                            : null}

                        {results && results.length > 0 ? (results.map((result) =>
                            <div className="result" key={result.id} onClick={() => handleClick(result.id)}>
                                <div className="d-flex">
                                    <div><p className="mb-0 pl-0">{result.name}</p></div>
                                    <div className="ml-auto">
                                        <Icon icon={ic_call_made} size={18} />
                                    </div>
                                </div>
                            </div>
                        )) :
                            <div className="p-3">
                                <p className="mb-0 text-unique">No result found.</p>
                            </div>
                        }
                    </div>
                    : null}

            </div>
        </div>
    );
};

export default Index;