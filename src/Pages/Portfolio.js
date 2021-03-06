/* eslint-disable no-unused-vars */
import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import portfolios from '../Components/Allportfolios';
import { useState } from 'react';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function Portfolio() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="portfolio-page">
            <div className="title">
                <Title title={'Portfolio'} span={'portfolio'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default Portfolio;