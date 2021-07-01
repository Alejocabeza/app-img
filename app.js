const preview = document.getElementById('img-preview');
const uploader = document.getElementById('img-uploader');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dt3a5afzh/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'c8uyuyde';
const bar = document.getElementById('bar');

uploader.addEventListener('change', async (e)=>{
  const file = e.target.files[0];

  const formData = new FormData();
  formData.append('file',file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  
  const res = await axios.post(CLOUDINARY_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress(e){
      const progress = (e.loaded * 100) / e.total;
      bar.setAttribute('value', progress);
    }
  });
  console.log(res);
  preview.src = res.data.secure_url;
  
}) 
