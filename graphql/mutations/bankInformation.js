import { gql } from '@apollo/client'
export const CREATE_BANK_INFORMATION = gql`
  mutation (
    $bankName: String!
    $bankAccountName: String!
    $bankAccountNumber: String!
    $dateOfBirth: Date!
    $publishedAt: DateTime!
  ) {
    createBankInformation(
      data: {
        bankName: $bankName
        bankAccountName: $bankAccountName
        bankAccountNumber: $bankAccountNumber
        dateOfBirth: $dateOfBirth
        publishedAt: $publishedAt
      }
    ) {
      data {
        id
      }
    }
  }
`