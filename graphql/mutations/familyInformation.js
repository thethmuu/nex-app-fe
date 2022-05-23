import { gql } from '@apollo/client'
export const CREATE_FAMILY_INFORMATION = gql`
  mutation (
    $name: String!
    $relationship: String!
    $dateOfBirth: Date!
    $phone: String!
    $publishedAt: DateTime!
  ) {
    createFamilyInformation(
      data: {
        name: $name
        relationship: $relationship
        dateOfBirth: $dateOfBirth
        phone: $phone
        publishedAt: $publishedAt
      }
    ) {
      data {
        id
      }
    }
  }
`
