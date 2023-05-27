import React from 'react';
import star from "../assets/star-full.svg"

const TableFilters = () => {
    return (
        <div className="table-filters">
            <div className="table-filters-container">
                <div className="stable-checkbox-container">
                    <input type="checkbox" id="stablecoin" defaultChecked={true} />
                    <label htmlFor="stableCoin">Avec stable coin</label>
                </div>
                <div className="no-list-btn">
                    <p>Aucune liste</p>
                </div>
                <div className="fav-list">
                    <p>Liste des favoris</p>
                    <img src={star} alt="icon star" />
                </div>
            </div>
        </div>
    );
};

export default TableFilters;