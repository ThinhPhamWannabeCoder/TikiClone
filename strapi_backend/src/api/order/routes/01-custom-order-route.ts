export default{
    routes:[
        {
            method: 'GET',
            path: '/orders',
            handler: 'order.getByUserId',
            config:{}
        },
       
        {
            method: 'POST',
            path: '/orders',
            handler: 'order.create',
            config:{
            },
        },
        // Use with updating Status, delete, .. Delete is just Hide
        {
            method: 'PATCH',
            path: '/orders',
            handler: 'order.updateOrder',
            config:{}
        },
        { 
            method: 'GET',
            path: '/orders/:id',
            handler: 'order.getById',
            config:{}
        },
        


    ]
}