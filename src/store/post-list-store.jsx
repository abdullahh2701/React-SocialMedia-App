import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to the beach",
    body: "Hey, I'm going to the beach today!",
    reactions: 2,
    userID: "user-5",
    tags: ["beach", "fun", "sun"],
  },

  {
    id: "2",
    title: "New job",
    body: "I got a new job today!",
    reactions: 15,
    userID: "user-12",
    tags: ["job", "work", "career"],
  },

  {
    id: "3",
    title: "New car",
    body: "I bought a new car today!",
    reactions: 10,
    userID: "user-8",
    tags: ["car", "auto"],
  },
];

export default PostListProvider;
