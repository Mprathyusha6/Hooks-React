import { useState } from "react"
import axios from "axios"
function Datafetching2(employeeset) {
    const [p, setposts] = useState([])

const change = () => {
    // const {p,setposts}=useState(posts)
    axios
        .get('https://reqres.in/api/users?page=2')
        .then(res1 => {
            console.log(res1)
            setposts(p=> res1.data.data

            )
            employeeset=p
            console.log('set:',employeeset)
        })
        .catch(err => {
            console.log(err)
        })
}
return(
<button onClick={change}>button</button>
)

}
export default Datafetching2