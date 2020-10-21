import React from 'react';
import '../../styles/modal.scss';

import BannerImg from '../../assets/static/offer_banner.jpg';

const HomeLoadingModal = () => {
    return (
        <div className="home-loading-modal">
            <div className="flex-center flex-column">
                <div className="card border-0 rounded-0 shadow p-0">
                    <img src={BannerImg} className="img-fluid" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default HomeLoadingModal;