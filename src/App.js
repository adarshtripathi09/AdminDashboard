import './App.css';
import Dashboard from '../src/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../src/Header';
import Edit from '../src/Edit';
import Add from '../src/Add';
import Blog from '../src/Blog';
import BlogPost from '../src/BlogPost';
import AdddBlog from '../src/AdddBlog';
import UpdatePost from '../src/UpdatePost';
import Editpopup from '../src/Editpopup';
import userData from '../src/UserTable';


function App() {
  return (
  <>
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/:id" element={<userData/>}> </Route>
      <Route path="/add" element={<Add/>}></Route>
      <Route path="/blog/" element={<Blog/>}></Route>
      <Route path="/blog/:id" element={<BlogPost/>}></Route>
      <Route path="/post" element={<AdddBlog/>}></Route>
      <Route path="/updateblog/:id" element={<UpdatePost/>}></Route>
      <Route path="/editpopup" element={<Editpopup/>}></Route>
       
      </Routes>
    </BrowserRouter>
  
  

  </>
  );
}

export default App;
