export default {
    routes:[
        {
            method: 'GET',
            path: '/products/getAll',
            handler: 'product.getAll',

            config:{
            },
        },
        {
            method: 'GET',
            path: '/products/:id',
            handler: 'product.getProductById',
        },
        

    ]
}