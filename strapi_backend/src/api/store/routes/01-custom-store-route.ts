export default {
    routes:[
        {
            method: 'GET',
            path: '/stores/short/:id',
            // auth: false,
            handler: 'store.getShortInfo',

            config:{
            },
        },
   

    ]
}