import { useEffect, useState } from "react";
import userApi from "../../services/user.services";
import { PencilIcon } from "@heroicons/react/24/solid";

export default function PreviewAvatar() {
  const [avatar, setAvatar] = useState(null);
  const [file, setFile] = useState(null);
  useEffect(() => {
    // Clean up function to revoke object URLs
    const cleanup = () => {
      if (avatar) {
        URL.revokeObjectURL(avatar);
      }
      // If you also want to revoke the preview URL:
      // URL.revokeObjectURL(file?.preview);
    };

    // Invoke cleanup when the component unmounts
    return cleanup;
  }, [avatar]); // Trigger cleanup when avatar changes

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      file.preview = URL.createObjectURL(file); // Create preview URL (optional)
      setAvatar(URL.createObjectURL(file));
    }
  };
  const handleSubmit  = async (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('files',file)
    const response = await userApi.uploadFile(formData);
    console.log(response)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          {avatar && <img src={avatar} alt="Avatar Preview"  className="object-cover w-24 h-24 rounded-full"/>}
          <label  className="custom-file-upload cursor-pointer absolute right-0 bottom-0 rounded-full bg-green-500 w-10 h-10 flex justify-center items-center">
              <PencilIcon className="w-5 h-5"/>
              <input  name="avatar" type="file" accept="image/png, image/jpeg"
                onChange={handlePreviewAvatar}  style={{ display: 'none' }}    
              />
          </label>
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
