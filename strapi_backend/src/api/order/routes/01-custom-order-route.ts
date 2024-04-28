export default{
    routes:[
        {
            method: 'GET',
            path: '/orders/buyer/:userId',
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
            method: 'PATCH',
            path: '/orders/delivery',
            handler: 'order.updateDeliveryStatus',
            config:{}
        },
        


    ]
}