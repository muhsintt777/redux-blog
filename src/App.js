import Header from "./components/Header";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import { Routes, Route } from "react-router-dom";
import EditPost from "./features/posts/EditPost";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/addPost" element={<AddPostForm />} />
        <Route path="/editPost/:id" element={<EditPost />} />
      </Routes>
    </main>
  );
}

export default App;
