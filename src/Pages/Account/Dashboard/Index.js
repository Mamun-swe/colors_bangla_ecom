import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../../styles/Account/dashboard.scss';

const Index = () => {
    const history = useHistory()

    const doLogout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <div className="dashboard">
            <div className="header text-center mt-3">
                <h5>my account</h5>
            </div>
            <div className="body mb-4">
                <p className="mb-4">Hello admin@gmail.com (not admin@gmail.com ? <span onClick={() => doLogout}>Log out )</span></p>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
            </div>
        </div>
    );
};

export default Index;