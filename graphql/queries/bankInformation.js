import { gql } from '@apollo/client'
export const GET_BANK_INFORMATIONS = gql`
  query {
    bankInformations {
      data {
        id
        attributes {
          bankName
          bankAccountName
          bankAccountNumber
          dateOfBirth
        }
      }
    }
  }
`
