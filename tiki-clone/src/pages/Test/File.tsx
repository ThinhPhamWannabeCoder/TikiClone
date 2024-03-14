import { useState } from "react";
import userApi from "../../services/user.services";
const DOMAIN_URL = import.meta.env.vi
export default function FileUpload(){
    const [file, setFile] = useState(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    // console.log(file)
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('files', file);
    const response = await userApi.uploadFile(formData);
    console.log(response)

  };
    return(
        <div>
            <h1>Upload File</h1>
            <form onSubmit={onFormSubmit}>
                <input type="file" name="file" onChange={onFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>

    )
}