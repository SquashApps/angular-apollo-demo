import gql from 'graphql-tag';
import { todoData } from '../constants';
import { ADD_TODO_QUERY } from '../query';
/** Schema, Mutation, Query */
export const typeDefs = `
  type Todo {
    id: Int!
    title: String!
    completed: Boolean!
  }
  type Mutation {
    addTodo(title: String!, completed: Boolean!): Todo
  }
  type Query {

    todos: [Todo]
  }
`;

/** Default value in cache */

export const defaults = {
    todos: todoData,
};

let newTodoId = todoData.length + 1;

/**  Resolvers */

export const resolvers = {
    Mutation: {
        addTodo: (_, { title, completed }, { cache }) => {
            const query = ADD_TODO_QUERY;
            const previous = cache.readQuery({ query });   // Reading the existing document from cache
            const newTodo = {
                id: newTodoId++,
                title: title,
                completed: completed,
                __typename: 'TodoItem',
            };
            const data = {
                todos: previous.todos.concat([newTodo]),
            };
            cache.writeData({ data });
            return newTodo;
        }
    },
};
