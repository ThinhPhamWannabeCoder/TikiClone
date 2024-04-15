export default{
    routes:[
        {
            method: 'PUT',
            path: '/carts/delete',
            handler: 'cart.deleteByIds',
            config:{

            }

        },
        {
            method: 'PATCH',
            path: '/carts',
            handler: 'cart.updateQuantity',
            config:{

            }
        },
        {
            method: 'POST',
            path: '/carts/user/:userId',
            handler: 'cart.addCart',
            config:{

            }
        },
        {
            method: 'GET',
            path: '/carts/user/:id',
            handler: 'cart.getByUserId',
            config:{}
        }
    ]
}