import { useState } from 'react';
import './ListProduct.scss';
import { useEffect } from 'react';
import { useCallback } from 'react';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = useCallback(async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
            });
    });

    useEffect(() => {
        fetchInfo();
    }, []);

    const remove_product = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        });
        await fetchInfo();
    };

    return (
        <div className="list-product">
            <h1>All Products List</h1>
            <div className="list-product-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old price</p>
                <p>New price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="list-product-all-products">
                {allProducts.map((product, index) => {
                    return (
                        <>
                            <hr />
                            <div key={index} className="list-product-format-main list-product-format">
                                <div className="list-product-product-icon">
                                    <img src={product.image} alt="" />
                                </div>
                                <p>{product.name}</p>
                                <p>${product.old_price}</p>
                                <p>${product.new_price}</p>
                                <p>${product.category}</p>
                                <img
                                    onClick={() => {
                                        remove_product(product.id);
                                    }}
                                    className="list-product-remove-icon"
                                    src={cross_icon}
                                    alt=""
                                />
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default ListProduct;
