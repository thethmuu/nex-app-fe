import { gql } from '@apollo/client'
export const GET_PERSONAL_INFORMATIONS = gql`
  query {
    personalInformations {
      data {
        id
        attributes {
          firstName
          lastName
          phone
          birthday
          nationality
          religion
          nricNum
          maritalStatus
          gender
          address
          state
          country
          postalCode
          department
          reportTo
          designation
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`
