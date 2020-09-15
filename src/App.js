import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from './UserList';
function App() {
  return(
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <UserList />
    </div>
  )
}

export default App;
