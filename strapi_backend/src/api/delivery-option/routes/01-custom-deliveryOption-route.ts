export default{
    route:[
        {
            method: 'GET',
            path: '/delivery-options',
            handler: 'delivery-option.getAll',
            config:{}
        },
        {
            method: 'GET',
            path: '/delivery-options/:id',
            handler: 'delivery-option.getById',
            config:{}
        },
        {
            method: 'POST',
            path: '/delivery-options',
            handler: 'delivery-option.create',
            config:{}
        },
        {
            method: 'DELETE',
            path: '/delivery-options/:id',
            handler: 'delivery-option.delete',
            config:{}
        },
        {
            method: 'PUT',
            path: '/delivery-options',
            handler: 'delivery-option.update',
            config:{}
        }
    ]
}