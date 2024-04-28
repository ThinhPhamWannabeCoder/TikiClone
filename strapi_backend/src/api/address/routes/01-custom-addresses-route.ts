export default{
    routes: [
        {
            method:'GET',
            path: '/addresses/user/:userId',
            handler :'address.getByUserId'
        },
        {
            method:'POST',
            path: '/addresses/user/:userId',
            handler :'address.create'
        },
        {
            method:'POST',
            path: '/addresses/user/update/:userId',
            handler :'address.updateByUserId'
        },
        {
            method:'DELETE',
            path: '/addresses/user/:userId/:id',
            handler :'address.deleteById'
        },
        
        
    ]
}