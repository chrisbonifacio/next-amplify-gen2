/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $condition: ModelBlogConditionInput
    $input: CreateBlogInput!
  ) {
    createBlog(condition: $condition, input: $input) {
      createdAt
      id
      owner
      posts {
        nextToken
        __typename
      }
      title
      updatedAt
      __typename
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $condition: ModelPostConditionInput
    $input: CreatePostInput!
  ) {
    createPost(condition: $condition, input: $input) {
      blog {
        createdAt
        id
        owner
        title
        updatedAt
        __typename
      }
      blogPostsId
      content
      createdAt
      id
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
      content
      createdAt
      done
      id
      owner
      priority
      updatedAt
      __typename
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $condition: ModelBlogConditionInput
    $input: DeleteBlogInput!
  ) {
    deleteBlog(condition: $condition, input: $input) {
      createdAt
      id
      owner
      posts {
        nextToken
        __typename
      }
      title
      updatedAt
      __typename
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $condition: ModelPostConditionInput
    $input: DeletePostInput!
  ) {
    deletePost(condition: $condition, input: $input) {
      blog {
        createdAt
        id
        owner
        title
        updatedAt
        __typename
      }
      blogPostsId
      content
      createdAt
      id
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
      content
      createdAt
      done
      id
      owner
      priority
      updatedAt
      __typename
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $condition: ModelBlogConditionInput
    $input: UpdateBlogInput!
  ) {
    updateBlog(condition: $condition, input: $input) {
      createdAt
      id
      owner
      posts {
        nextToken
        __typename
      }
      title
      updatedAt
      __typename
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $condition: ModelPostConditionInput
    $input: UpdatePostInput!
  ) {
    updatePost(condition: $condition, input: $input) {
      blog {
        createdAt
        id
        owner
        title
        updatedAt
        __typename
      }
      blogPostsId
      content
      createdAt
      id
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
      content
      createdAt
      done
      id
      owner
      priority
      updatedAt
      __typename
    }
  }
`;
