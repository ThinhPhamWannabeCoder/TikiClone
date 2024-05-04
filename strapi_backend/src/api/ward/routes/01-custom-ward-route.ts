export default {
    routes: [
        {
            method: 'GET',
            path: '/wards',
            handler: 'ward.getAll',
            config:{}
        },
    ]
}