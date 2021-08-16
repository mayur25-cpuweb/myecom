// import React from 'react'
// import { useParams } from 'react-router-dom';

// const Test = () => {
//     const {id} =useParams();

//     return (
//         <div>
//             <h1>some stuff:{id}</h1>
//         </div>
//     )
// }

// export default Test
import React from 'react'
import { useParams } from 'react-router-dom';

function Test() {
        const {id} =useParams();

    return (
        <div>
            <h1>some stuff in function:{id}</h1>

        </div>
    )
}

export default Test
