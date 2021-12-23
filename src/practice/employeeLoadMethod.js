// import axios from "axios";
// function Datafetching(){

// const fetchUsers = (page_number) => {
//            axios
//             .get(`https://reqres.in/api/users?page=${page_number}`)
//             .then(res => {
//                 // setUsers([...users, res]); // This can also be done depending on the usecase
//                 return res;
//             })
//             .catch(err => {
//                 console.error(err);
//             })
// }

// useEffect(() => {
//     const data = fetchUsers(1);
//     setUsers(data);
// }, [])

// const handleLoadMore = () => {
//     const data = fetchUsers(2);
//     setUsers([...users, data]);
// }
// }