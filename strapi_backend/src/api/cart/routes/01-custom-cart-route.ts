export default{
    routes:[
        {
            method: 'POST',
            path: '/carts/delete',
            handler: 'cart.deleteByIds',
            config:{

            }

        },
        {
            method: 'POST',
            path: '/carts/update',
            handler: 'cart.updateQuantity',
            config:{

            }
        },
        {
            method: 'POST',
            path: '/carts',
            handler: 'cart.addToCart',
            config:{

            }
        },
        {
            method: 'GET',
            path: '/carts/user/:id',
            handler: 'cart.getByUserId',
            config:{}
        },

    ]
}
