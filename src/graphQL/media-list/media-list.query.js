import { gql } from '@apollo/client'

export const ANIME_MOVIES_QUERY = gql`
    query ($page: Int, $perPage: Int, $userId: Int) {
        Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                hasNextPage
              }
            mediaList (sort: [SCORE_DESC], userId: $userId) {
                id
                mediaId
                userId
                status
                updatedAt
                media {
                    id
                    title {
                        native
                    }
                    coverImage {
                        medium
                    }
                    type
                }
            }
        }
    }
`