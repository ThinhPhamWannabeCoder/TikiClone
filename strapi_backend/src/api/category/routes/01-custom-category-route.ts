export default{
    routes:[
        {
            method: 'GET',
            path: '/categories',
            handler: 'category.getAll',
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
        {
            method: 'GET',
            path: '/categories/sub-nav/:id',
            handler: 'category.getSubNav',
        },
        
        
    ]
}