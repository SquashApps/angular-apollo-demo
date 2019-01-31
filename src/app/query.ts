/** Query */
import gql from 'graphql-tag';
export const ADD_TODO = gql`
mutation addTodo($title: String!, $completed: Boolean!) {
  addTodo(title: $title, completed: $completed) @client {
    id
  }
}
`;

export const GET_TODOS = gql`
{
  todos @client {
    id
    title
    completed
  }
}
`;

export const ADD_TODO_QUERY = gql`
query GetTodos {
  todos @client {
    id
    title
    completed
  }
}
`;

