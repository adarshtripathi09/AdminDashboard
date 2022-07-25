import './App.css';
import React from "react"
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

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
export const ThemeContext = React.createContext({theme: themes.light, set: () => null });
function App() {
  const [currentTheme, setTheme] = React.useState(themes.dark)
  const changeTheme = (type) => {
    setTheme(themes[type])
  }
  return (
  <>
  <BrowserRouter>
  <ThemeContext.Provider value={{theme: currentTheme, setTheme: changeTheme}}>
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
      </ThemeContext.Provider>
    </BrowserRouter>
  
  

  </>
  );
}

export default App;
