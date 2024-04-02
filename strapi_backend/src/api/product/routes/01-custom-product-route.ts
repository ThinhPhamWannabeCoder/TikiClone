export default {
    routes:[
        {
            method: 'GET',
            path: '/products/getAll',
            // auth: false,
            handler: 'product.getAll',

            config:{
            },
        },
        // {
        //     method: 'GET',
        //     path: '/products/:id',
        //     handler: 'product.getProductById',
        // },
        

    ]
}