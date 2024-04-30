import React, {FC} from 'react';
import styles from './product.module.css'

export interface IProduct {
    id: number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images"?: string
}

export type IProductType = IProduct & { children?: React.ReactNode };

const Product: FC<IProductType> = ({
                                       id,
                                       title,
                                       description,
                                       price,
                                       discountPercentage,
                                       rating,
                                       stock,
                                       brand,
                                       category,
                                       thumbnail,
                                   }) => {
    return (
        <div>
            <img className={styles.img} src={thumbnail} alt={title}/>
            <h3>{brand} {title}, ${price}</h3>
            <h4>Category: {category}</h4>
            <h4>{description}</h4>
            <p>Discount percentage: {discountPercentage}</p>
            <p>Rating: {rating}</p>
            <p>Stock: {stock}</p>

        </div>
    );
};

export default Product;