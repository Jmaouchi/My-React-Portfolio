import { gql } from '@apollo/client';

export const ADD_CONTACT = gql`
mutation addContact( $firstName: String, $lastName: String, $email: String, $text:String){
  addContact( firstName:$firstName, lastName:$lastName, email: $email, text: $text){
    firstName
    lastName
    email
    text
  }
}
`;