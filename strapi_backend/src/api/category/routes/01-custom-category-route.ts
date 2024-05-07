export default{
    routes:[
        {
            method: 'GET',
            path: '/categories',
            handler: 'category.getAll',
        },
        {
            method: 'GET',
            path: '/categories/nav',
            handler: 'category.getNav',
        },
        {
            method: 'GET',
            path: '/categories/best',
            handler: 'category.getBest',
        },
        {
            method: 'GET',
            path: '/categories/top',
            handler: 'category.getTop',
        },
        
        
    ]
}