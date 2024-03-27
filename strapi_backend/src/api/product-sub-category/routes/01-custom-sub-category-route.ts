export default {
    routes:[
        {
            method: 'GET',
            path: '/product-sub-categories/:category/top',
            handler: 'product-sub-category.getTop'
        },
        {
            method: 'GET',
            path: '/product-sub-categories/:category/best',
            handler: 'product-sub-category.getBest'
        },
        {
            method: 'GET',
            path: '/product-sub-categories/:category/nav',
            handler: 'product-sub-category.getNav'
        }
    ]
}