export default{
    routes:[
        {
            method: 'GET',
            path: '/orders',
            handler: 'order.getAllOrder',
            config:{}
        },
        { 
            method: 'GET',
            path: '/orders/:id',
            handler: 'order.getOrderById',
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
            handlder: 'order.updateOrder',
            config:{}
        },


    ]
}