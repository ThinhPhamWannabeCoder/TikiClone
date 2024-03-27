export default {
    routes:[
        {
            method: 'GET',
            path: '/products/:id',
            handler: 'product.getProductById',
        },
        {
            method: 'GET',
            path: '/products/getAll',
            handler: 'product.getAll',
            // Chu y co filter 
            // Top ban chay ...
            // Filter tiep thoe category
            // Filter tiep thoe ....
            // Pagination
            config:{

            },
        },
        {
            method: 'GET',
            path: '/products/bestseller',
            handler: 'product.bestSeller'
        }
        // {
        //     method: 'GET',
        //     path: '/products/'
        // },
        // {
        //     method: 'GET',
        //     path: '/products/best',
        //     // Hanlder theo category, top cung gia tri -> Note lai trong bai - Theo tien ban duoc - so luong
        // },
        // {
        //     method: 'GET',
        //     path: 'products/recommed',
        //     // Handler : so luong cua 1 thang gan day theo sub-cateogry
        // }
    ]
}