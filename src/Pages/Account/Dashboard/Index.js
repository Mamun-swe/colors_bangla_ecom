import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../../styles/Account/dashboard.scss';
import axios from 'axios';
import { apiURL } from '../../../utils/apiURL';

import LoadingComponent from '../../../Components/Loader';

const Index = () => {
    const history = useHistory()
    const [isLoading, setLoading] = useState(true)
    const [user, setUser] = useState({})

    // Header 
    const header = {
        headers:
        {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    }

    useEffect(() => {
        // Fetch Loggedin User
        const fetchLoggedUser = async () => {
            try {
                const response = await axios.get(`${apiURL}me`, header)
                setUser(response.data)
                setLoading(false)
            } catch (error) {
                if (error) {
                    console.log(error);
                }
            }
        }
        fetchLoggedUser()
    }, [])

    const doLogout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <div className="dashboard">
            {isLoading ? <LoadingComponent /> : null}
            <div>
                <div className="header text-center mt-3">
                    <h5>my account</h5>
                </div>
                {user ?
                    <div className="body mb-4">
                        <p className="mb-4">Hello <span className="text-info">{user.email}</span> (not <span className="text-info">{user.email}</span> ? <span onClick={() => doLogout}>Log out )</span></p>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                    </div>
                    : null}
            </div>
        </div>
    );
};

export default Index;