import React, { useState, useEffect } from 'react';
import axios from '../../axios-orders';

import BurgerImage from '../../assets/img/cuts/burger.jpg';

const MenuSection = (props) => {
    const [menuCatalog, setMenuCatalog] = useState([]);

    useEffect(() => {
        axios.get('/menuCatalog.json')
            .then(response => {
                setMenuCatalog(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <section className="section-menu">
            <div className="shell">
                <div className="section-head text-align-center">
                    <h4 className="section-subheading">Specialties</h4>
                    <h3 className="section-title">Our Menu</h3>
                </div>{/* section-head */}
                <div className="section-body">
                    {menuCatalog.map(column => (
                        <div className="menu-column" key={column.id}>
                            <h5>{column.name}</h5>
                            {column.products.map(product => (
                                <div className="menu-product" key={product.id}>
                                    <img src={BurgerImage} alt="" />
                                    <div className="product-content">
                                        <p>
                                            <span>
                                                {product.name}
                                            </span>
                                            <span>{product.price}</span>
                                        </p>
                                        <p>{product.contains.join(', ')}</p>
                                    </div>{/* product-content */}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>{/* section-body */}
            </div>{/* shell */}
        </section>
    );
}

export default MenuSection;