
import { gql } from '@apollo/client';

export const CONTACTS_INFOS  = gql`
query{
  contacts{
    _id : ID,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Int,
    text: String
  } 
}
`;

