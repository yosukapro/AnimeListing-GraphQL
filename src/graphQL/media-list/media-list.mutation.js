import { gql } from '@apollo/client'

export const MUTATION_SAVE_MEDIA_LIST_ENTRY = gql`
    mutation ($mediaId: Int, $status: MediaListStatus){
        SaveMediaListEntry (mediaId: $mediaId, status: $status) {
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
`