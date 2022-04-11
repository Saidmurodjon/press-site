import axios from "axios";
import { useEffect, useState } from "react";
// import MainCard from 'MainCard.css'
function Maincard() {
  var data = [
    {
      _id: 1,
      name: "ssds",
      date: "12878",
    },
    {
      _id: 2,
      name: "rers",
      date: "1267",
    },
    {
      _id: 3,
      name: "swrer",
      date: "127676",
    },
    {
      _id: 4,
      name: "swewe",
      date: "1223",
    },
    {
      _id: 5,
      name: "s2323",
      date: "12232",
    },
    {
      _id: 6,
      name: "sgfh",
      date: "124334",
    },
  ];
  const [users, setUsers] = useState([]);
  const [press, setPress] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const res = await axios.get(`http://localhost:5000/users`);
      setUsers(res);
    }
    getUsers();
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/press")
      .then((res) => setPress(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(press);
  return (
    <>
      {press.map((elem) => {
        return (
          <div key={elem._id} className="col-md-3 m-1 justify-content-center bg-danger">
            <h1>{elem.title}</h1>
            <p>{elem.view}</p>
            <span>{elem.text}</span>
          </div>
        );
      })}
    </>
  );
}
export default Maincard;
