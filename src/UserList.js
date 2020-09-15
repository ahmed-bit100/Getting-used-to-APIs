import React, {useState,useEffect} from 'react';
import axios from 'axios';
function UserList(){
const [data, setData] = useState( [] );
useEffect(() => {
const fetchData = async () => {
    const result = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
    );
    setData(result.data);
};
fetchData();
}, []);
return (
    <div>
    {data.map(item => (
        <div>
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p>{item.email}</p>
        </div>))}
        </div>
)
    }
export default UserList;