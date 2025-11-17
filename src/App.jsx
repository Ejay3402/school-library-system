import { useEffect, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import BookApp from "./components/BookApp";

import './styles/reset.scss'

const USER_KEY = `ems_user_v1`;

const App = () => {

  const [user , setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parser(raw) : null ;
    } catch {
      return null
    }
  });

  useEffect(() => {
      if(user) localStorage.setItem(USER_KEY, JSON.stringify(user));
      else localStorage.removeItem(USER_KEY)  
  }, [user]);

  const handleLogin = (userObj) => setUser(userObj);
  const handleLogout = () => setUser(null);


  return (
    <>
    
      <main>
          {!user ? <Login onLogin={handleLogin}/> : <BookApp onLogOut={handleLogout}/>}
      </main>
    </>
  )
}

export default App;