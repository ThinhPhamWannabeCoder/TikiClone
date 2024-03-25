export default{
    routes:[
        {
            method: 'GET',
            path: '/product-categories/top',
            handler: 'product-category.getTop',
        },
        {
            method: 'GET',
            path: '/product-categories/best',
            handler: 'product-category.getBest',

        },
        {
            method :'GET',
            path: '/product-categories/nav',
            handler: 'product-category.getNav',
        }
    ]
}