import React from "react"
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart, CallMissedSharp, ClassOutlined } from "@material-ui/icons";

import useStyles from './product/styles.js';

//Typography is use for any kind of text//
//gutterBottom for some space on the buttom//

const Product = ({product}) => {
    const Classes = useStyles();
    return (
        <Card className ={Classes.root}>
            <CardMedia className = {Classes.media} image = '' title={product.name}/>
            <CardContent>
                <div className ={Classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price}
                    </Typography>
                    </div>
                    <Typography variant="h2" color="textSecondary">{product.description} </Typography>
            </CardContent>
            <CardActions disableSpacing className={Classes.CardActions}>
                <IconButton aria-label="Add to cart"></IconButton>
                <AddShoppingCart/>

            </CardActions>
        </Card>
    )
}

export default Product;