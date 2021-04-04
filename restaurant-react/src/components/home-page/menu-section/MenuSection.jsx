import React from 'react';
import axios from '../../../axios-orders';
import Modal from '../../../shared/modal/Modal';

import BurgerImage from '../../../assets/img/cuts/burger.jpg';

class MenuSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuCatalog: [],
            modalError: false,
        }
    }

    handleCloseModal = (e) => {
        if (e) {
            e.preventDefault();
        }

        this.setState({
            modalError: false,
        });

        document.body.classList.remove('prevent-scroll');
    }

    componentDidMount = () => {
        axios.get('/menuCatalog.json')
            .then(response => {
                const menuCatalog = response.data;

                this.setState({
                    menuCatalog,
                });
            })
            .catch(error => {
                this.setState({
                    modalError: true,
                });
                document.body.classList.add('prevent-scroll');
            });
    }

    render() {
        return (
            <React.Fragment>
                <section className="section-menu" id={this.props.id} ref={this.props.menuRef} >
                    <div className="shell">
                        <div className="section-head text-center">
                            <h4 className="section-subheading">Specialties</h4>
                            <h3 className="section-title">Our Menu</h3>
                        </div>{/* section-head */}
                        <div className="section-body">
                            {this.state.menuCatalog.map(column => (
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
                {this.state.modalError && (
                    <Modal
                        title='Error'
                        content='Oops! Something went wrong...'
                        closeModal={this.handleCloseModal}
                    />
                )}
            </React.Fragment>
        );
    }
}

export default MenuSection;