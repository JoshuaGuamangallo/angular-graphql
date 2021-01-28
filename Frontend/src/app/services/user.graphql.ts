import gql from 'graphql-tag';

export const GET_USERS = gql`
  {
    getUsers{
    _id,
    name, 
    email,
    age,
    address,
    phone
		
  }
  }
`;

export const ADD_USER = gql`
mutation createUser($name:String!, $email:String!, $age:String!, $address:String!, $phone:String!)
  {
    createUser(
    name: $name,
    email: $email,
    age: $age,
    address: $address,
    phone: $phone
		
    ){
    _id
    name,
    email,
    age,
    address,
    phone,
  }
  }
`;

export const DELETE_USER = gql`
mutation deleteUser($id:String!)
  {
    deleteUser(
        id: $id   
    ){
    _id,

  }
  }
`;