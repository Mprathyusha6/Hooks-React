import React, { useState, useEffect } from "react";
import axios from 'axios'
//  import Datafetching2 from "./chngeemployes";

function Datafetching() {
    const [posts, setposts] = useState({})
    // let id=0;
    const [id, setid] = useState(1)
const [loading,setLoading]=useState(true)

    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users?page=1`)
            .then(res1 => {
                // console.log(res1)
                
                setposts(res1.data.data)
                setLoading(false)
                // setsinglepost(posts[{employeeid}])
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    console.log(posts[1])

    function changeid() {
        if (document.getElementById("valueid").value) {
            if (document.getElementById("valueid").value < 6)
                setid(document.getElementById("valueid").value)
        }
    }
    function render(){
        if(loading){
            return <p>Loading...</p>
        }
        else{
            // console.log("check")
            console.log(posts)
            return (

                <div>
                    <h1>Page</h1>
                <input type="text" id='valueid' onChange={changeid} />
        
                    <h1>{id}</h1>
                    <div>
                        <img src={posts[id].avatar} alt={posts[id].avatar} />
                    </div>
                    {/* <h1>{posts[id].email}</h1>
        
                    <div>
                        <h1>{posts[1].first_name}</h1>
                        <p>Email : {posts[1].email}</p>
                    </div>  */}
                    {/* <input type="text" id='valueid' value={employeeid} onChange={e => setemployeeid(e.target.value)} /> */}
                    
                </div>
        
            )
        
        }
    }
return render()
    
}
export default Datafetching
