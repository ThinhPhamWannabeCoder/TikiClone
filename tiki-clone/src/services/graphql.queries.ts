import { gql } from "@apollo/client"

const GET_USER_NOTIFICATION = gql`
    query GetUser($id: ID!, $page: Int = 1, $pageSize: Int = 10) {
        notificationUsers(
        filters: { receiver_id: { id: { eq: $id } } }  # Add the missing opening curly brace here
        pagination: { page: $page, pageSize: $pageSize }
        )
        {
        data {
            id
            attributes {
            Title
            message
            createdAt
            receiver_id {
                data {
                id
                }
            }
            }
        }
        meta{
            pagination{
                page
                pageSize
                pageCount
                total
            }
        }
        }
    }  
`
export {GET_USER_NOTIFICATION};