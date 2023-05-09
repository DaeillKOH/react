import React, { useEffect, useState } from 'react';

export default function Products() {
    const [count, setCount] = useState(0);
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data/products.json')
        .then((res) => res.json())
        .then((data) => {
            console.log('🔥温かいデータを掘って来たよ');
            setProducts(data);
        });
        return () => {
            console.log('綺麗に掃除しました！');
        };
    }, [] );    


    return (
        <>
            <ul>
                {Products.map((products) => (
                    <li key={products.id}>
                        <article>
                            <h3>{products.name}</h3>
                            <p>{products.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </>
    );
}