import HomePage from "../pages/Home";
import Users from "../pages/Users";
import Comments from "../pages/Comments";

export const navbar = [
    { id: Math.random(), name: "Home", element: <HomePage />, path: "/" },
    { id: Math.random(), name: "Users", element: <Users />, path: "/users" },
    { id: Math.random(), name: "Comments", element: <Comments />, path: "/comments" }
]