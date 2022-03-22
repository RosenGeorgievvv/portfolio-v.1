import React from 'react'
import Categories from '../Components/Categories'
import MenuItems from '../Components/MenuItems'
import Title from '../Components/Title'
import portfolios from '../Components/Allportfolios';
import { useState } from 'react';


function Portfolio() {
    const [categories, setCategories] = useState(null);
    const [menuItems, setMenuItems] = useState(portfolios);



    return (
        <div className='portfolio-page'>
            <div className='title'>
                <Title title={'Portfolios'} span={'portfolios'} />
            </div>
            <div className='portfolios'>
                <Categories />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default Portfolio