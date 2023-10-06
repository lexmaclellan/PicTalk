// // import './App.css';
// import React, {useState} from 'react';
// import axios from 'axios';

// function Resume() {

//   const [file, setFile] = useState();
//   const [uploadedFile, setUploadedFile] = useState();
//   const [error, setError] = useState();

//   function handleChange(event) {
//     setFile(event.target.files[0]);
//   }
  
//   function handleSubmit(event) {
//     event.preventDefault();
//     const url = 'http://localhost:3000/uploadFile';
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('fileName', file.name);
//     const config = {
//       headers: {
//         'content-type': 'multipart/form-data',
//       },
//     };
//     axios.post(url, formData, config)
//       .then((response) => {
//         console.log(response.data);
//         setUploadedFile(response.data.file);
//       })
//       .catch((error) => {
//         console.error("Error uploading file: ", error);
//         setError(error);
//       });
//   }

//   return (
//     <div className="App">
//         <form onSubmit={handleSubmit}>
//           <h1>React File Upload</h1>
//           <input type="file" onChange={handleChange}/>
//           <button type="submit">Upload</button>
//         </form>
//         {uploadedFile && <img src={uploadedFile} alt="Uploaded content"/>}
//         {error && <p>Error uploading file: {error.message}</p>}
//     </div>
//   );
// }

// export default Resume;



// import axios from 'axios';
 
// import React, { Component } from 'react';
 
// class Resume extends Component {
 
//     state = {
 
//         // Initially, no file is selected
//         selectedFile: null
//     };
 
//     // On file select (from the pop up)
//     onFileChange = event => {
 
//         // Update the state
//         this.setState({ selectedFile: event.target.files[0] });
 
//     };
 
//     // On file upload (click the upload button)
//     onFileUpload = () => {
 
//         // Create an object of formData
//         const formData = new FormData();
 
//         // Update the formData object
//         formData.append(
//             "myFile",
//             this.state.selectedFile,
//             this.state.selectedFile.name
//         );
 
//         // Details of the uploaded file
//         console.log(this.state.selectedFile);
 
//         // Request made to the backend api
//         // Send formData object
//         axios.post("api/uploadfile", formData);
//     };
 
//     // File content to be displayed after
//     // file upload is complete
//     fileData = () => {
 
//         if (this.state.selectedFile) {
 
//             return (
//                 <div>
//                     <h2>File Details:</h2>
//                     <p>File Name: {this.state.selectedFile.name}</p>
 
//                     <p>File Type: {this.state.selectedFile.type}</p>
 
//                     <p>
//                         Last Modified:{" "}
//                         {this.state.selectedFile.lastModifiedDate.toDateString()}
//                     </p>
 
//                 </div>
//             );
//         } else {
//             return (
//                 <div>
//                     <br />
//                     <h4>Choose before Pressing the Upload button</h4>
//                 </div>
//             );
//         }
//     };
 
//     render() {
 
//         return (
//             <div>
//                 <div>
//                     <input type="file" onChange={this.onFileChange} />
//                     <button onClick={this.onFileUpload}>
//                         Upload!
//                     </button>
//                 </div>
//                 {this.fileData()}
//             </div>
//         );
//     }
// }
 
// export default Resume;

import React, { Component } from "react";

 
export default class ImageUploadPreview extends Component {
     
  
    fileObj = [];
    fileArray = [];
     
    constructor(props) {
        super(props);
         
        this.state = {
            file: [null]
        };
         
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
    }
    
  
    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }
  
 
     
    async onSubmit(e){
        e.preventDefault() 
        this.uploadFile(this.state.file);
        console.log(this.state.file);
    }
 
    async uploadFile(file){ 
        const formData = new FormData();
        console.log(formData);
    }
    
  
    render() {
        return (
            <div className="row" style={{textAlign: "center",  display: "flex", justifyContent: "space-between" }}>
                {(this.fileArray || []).map(url => (
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img src={url} alt="..." key={url} className="img-responsive rounded" style={{width: "400px", height: "400px"}}/>
                        {/* <h4>Some description here</h4> */}
                    </div>
                ))}
                 
                <form onSubmit={ this.onSubmit } className="form-inline">
                <br />
                <br />
                <br />
                <br />
                   
                    <div className="form-group">
                        <input type="file" className="form-control" style={{width: "20%"}} onChange={this.uploadMultipleFiles} multiple />
                    </div>
                    <div><button type="submit" className="btn btn-success" >Upload File</button></div>
                </form >
            </div>
        )
    }
}