import { useState } from 'react';
import './App.css';
import MultInput from './component/MultInput/multInput';
import TextEditor from './component/textEditor';


function AppTwo() {
    const [files, setFiles]=useState([null])

//e.target.files retuen a lsit of objects where every object contains the details of each file

    const handleUpload=(e)=>{
       setFiles(e.target.files)   
    }
    console.log("fdfdf", files[0]);


  return (
    <div>
      <div className="App">
     files Upload
    </div>
    <div className="uploadBox">
        <MultInput label="Upload" postload={(e)=>handleUpload(e)}  />
    </div>
    </div>
  );
}

export default AppTwo;
