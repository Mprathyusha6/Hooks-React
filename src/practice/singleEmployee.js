// import React, { useState, useEffect } from "react";
// import axios from 'axios'
// //  import Datafetching2 from "./chngeemployes";

// function Datafetching() {
//     const [posts, setposts] = useState([])
//     // const [id, setid] = useState(1)
//     const [employeeid, setemployeeid] = useState(1)
//     const [singlepost,setsinglepost]=useState({})
//     // const [employee,setemployee]=useState([])
//     // const [id,setid]=useState(1)
//     useEffect(() => {
//         axios
//             .get(`https://reqres.in/api/users?page=1`)
//             .then(res1 => {
//                 // console.log(res1)
//                 setposts(res1.data.data)
//                 setsinglepost(posts[{employeeid}])
//             })
//             .catch(err => {
//                 console.log(err)
//             })

//     }, [employeeid])
// console.log(singlepost)
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

//     // console.log('First value', posts[1])
//     // const employee = posts.data;
//     // console.log(employee)
//     return (

//         <div>
//             <h1>Page</h1>
//             <input type="text" value={employeeid} onChange={e => setemployeeid(e.target.value)} />

//             {/* <Datafetching2 employeeset={posts}/> */}
//             {/* <button onClick={change}>Load</button> */}
//             {/* {posts.map((item) => (

                
//             ))} */}
//             {/* <div key={singlepost.id}>
//                     <div>
//                         <img src={singlepost.avatar} alt={singlepost.avatar} />
//                     </div>

//                     <div>
//                         <h1>{singlepost.first_name}</h1>
//                         <p>Email : {singlepost.email}</p>
//                     </div>
//                 </div> */}
//         </div>

//     )
// }
// export default Datafetching
