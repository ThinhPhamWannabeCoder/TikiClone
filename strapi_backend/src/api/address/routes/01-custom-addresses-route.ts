export default{
    routes:[
        {
            method: 'GET',
            path: '/addresses/user/:id',
            handler: 'address.getByUserId',
        },
        {
            method: 'GET',
            path: '/addresses/:id',
            handler: 'address.getById',
        },
        {
            method: 'POST',
            path: '/addresses',
            handler: 'address.create',
        },
        {
            method: 'PUT',
            path: '/addresses',
            handler: 'address.update',
        },
        {
            method: 'DELETE',
            path: '/addresses/:id',
            handler: 'address.delete',
        }
    ]
}