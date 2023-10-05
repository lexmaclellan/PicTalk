// import React from 'react'
// import Project from './Project';

// export default function Profile() {
//   return (
//     <div>
//       <h1 className="center">My Projects</h1>
//         <div style={{border:"solid blue 5px"}}>
//           <Project />
//           <Project />
//           <Project />
//           <div className="card" style={{width: "18rem"}}>
//             <img src="/img/Tech_blog.png" className="card-img-top" alt="..."/>
//             <div classname="card-body">
//              
//           </div>
//         </div>
//         </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import Footer from './Footer';

const UploadAndDisplayImage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{textAlign: "center"}}>
      <h1 >Some header here</h1>

      {selectedImage && (
        <div >
          <img 
            alt="not found"
            width={"600px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default UploadAndDisplayImage;
