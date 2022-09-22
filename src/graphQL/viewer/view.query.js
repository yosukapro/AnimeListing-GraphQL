import { gql } from '@apollo/client'

export const VIEWER_QUERY = gql`
    query {
        Viewer {
            id
            name
            about
            avatar {
                medium
            }
            bannerImage
        }
    }
`