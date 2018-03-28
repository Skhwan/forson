import React, { Component } from 'react';
import './Promotion.css';

function PromoList (props) {
    const promoList = props.promoList;
    const items = promoList.map((item) =>
        <ul className="Promo-list" key={item}>
            <h1 className="Promo-content">{item}</h1>
        </ul>
    );
    return <div className="Promo-parent">{items}</div>
}

export default PromoList;
