// import React, { useState, useEffect } from "react";
// import axios from 'axios'
// import Fetchemployee from './employeeLoadMethod'
// //  import Datafetching2 from "./chngeemployes";

// function Datafetching() {
//     const [posts, setposts] = useState([])
//     // const [item, setemployee] = useState({})
//     const [id,setid]=useState(1)
//     useEffect(() => {
//         axios
//             .get(`https://reqres.in/api/users?page=${id}`)
//             .then(res1 => {
//                 console.log(res1)
//                 setposts(res1.data.data)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }, [id])

//     // const change = () => {
//     //     axios
//     //         .get('https://reqres.in/api/users?page=2')
//     //         .then(res1 => {
//     //             console.log(res1)
//     //             setposts(posts=> res1.data.data)
//     //         })
//     //         .catch(err => {
//     //             console.log(err)
//     //         })
//     // }

//     console.log(posts)



//     // const employee = posts.data;
//     // console.log(employee)
//     return (
//         <div>
//             {/* <Datafetching2 employeeset={posts}/> */}
//             {/* <button onClick={change}>Load</button> e.target.value*/}
//             <h1>Page</h1>
//             <input type="text" value={id} onChange={e => setid(fetchUsers(e.target.value))} />
// {/* <Fetchemployee /> */}
//             {posts.map((item) => (
//                 <div key={item.id}>
//                     <div>
//                         <img src={item.avatar} alt={item.avatar} />
//                     </div>

//                     <div>
//                         <h1>{item.first_name}</h1>
//                         <p>Email : {item.email}</p>
//                     </div>
//                 </div>

//             ))}
//         </div>

//     )
// }
// export default Datafetching
