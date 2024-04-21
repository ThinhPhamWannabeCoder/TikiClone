export default {
    routes:[
        {
            method: 'GET',
            path: '/deliveries',
            handler: 'delivery.getAll',
            config:{}
        },
        {
            method: 'GET',
            path: '/deliveries/:id',
            handler: 'delivery.getById',
            config:{}
        },
        {
            method: 'POST',
            path: '/deliveries',
            handler: 'delivery.create',
            config:{}
        },
        {
            method: 'DELETE',
            path: '/deliveries/:id',
            handler: 'delivery.delete',
            config:{}
        },
        {
            method: 'PUT',
            path: '/deliveries',
            handler: 'delivery.update',
            config:{}
        }
    ]
}