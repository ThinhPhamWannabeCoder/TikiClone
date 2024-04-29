export default{
    routes: [
        {
            method:'GET',
            path: '/addresses/user/:userId',
            handler :'address.getByUserId'
        },
        {
            method:'POST',
            path: '/addresses',
            handler :'address.create'
        },
        {
            method:'POST',
            path: '/addresses/update/:id',
            handler :'address.updateByUserId'
        },
        {
            method:'DELETE',
            path: '/addresses/:id',
            handler :'address.deleteById'
        },
        
        
    ]
}