export default {
    route:[
        {
            method: 'GET',
            path: '/address-users',
            handler: 'address-user.getAll',
            config:{

            }
        },
        {
            method: 'GET',
            path: '/address-users/:id',
            handler: 'address-user.getById',
            config:{
                
            }
        },
        {
            method: 'POST',
            path: '/address-users',
            handler: 'address-user.create',
            config:{
                
            }
        },
        {
            method: 'PUT',
            path: '/address-users',
            handler: 'address-user.update',
            config:{
                
            }
        },
        {
            method: 'DELETE',
            path: '/address-users/:id',
            handler: 'address-user.delete',
            config:{
                
            }
        },

    ]
}