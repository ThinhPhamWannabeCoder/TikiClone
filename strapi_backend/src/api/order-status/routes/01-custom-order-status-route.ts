export default{
    routes:[
        {
            method: 'GET',
            path: '/order-statuses',
            handler: 'order-status.getAll',
            config:{}
        },     
    ]
}