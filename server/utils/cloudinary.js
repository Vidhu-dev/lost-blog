import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null
    //Upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    })
    //file has been uploaded successfully
    fs.unlinkSync(localFilePath)
    return response
  } catch (error) {
    fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the operation got failed
    return null
  }
}

const getRandomAvatarURL = async () => {
  try {
    console.log('Getting random avatar...');
    const { resources } = await cloudinary.search
      .expression('folder:vi-blog/default-avatar')
      .execute();
    
    if (resources.length === 0) {
      throw new Error('No avatar images found');
    }
    
    const randomIndex = Math.floor(Math.random() * resources.length -1);
    const randomAvatar = resources[randomIndex];
    console.log(randomAvatar.secure_url);
    return randomAvatar.secure_url;
  } catch (error) {
    console.error('Error fetching random avatar:', error);
    return null;
  }
};

const getRandomCoverImageURL = async () => {
  try {
    console.log('Getting random cover image...');
    const { resources } = await cloudinary.search
      .expression('folder:vi-blog/default-cover')
      .execute();
    
    if (resources.length === 0) {
      throw new Error('No cover images found');
    }
    
    const randomIndex = Math.floor(Math.random() * resources.length);
    const randomCover = resources[randomIndex];
    console.log(randomCover.secure_url);
    return randomCover.secure_url;
  } catch (error) {
    console.error('Error fetching random cover image:', error);
    return null;
  }
};

export { uploadOnCloudinary, getRandomAvatarURL, getRandomCoverImageURL }
