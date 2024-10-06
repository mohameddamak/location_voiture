

import cloudinary from "../cloudinaryConfig";

export const uploadImageToCloudinary = async (image) => {
  try {
    const result = await cloudinary.uploader.upload(image.path, {
      folder: 'locationvoiture', // Remplacez par le dossier de votre choix
      use_filename: true,
      unique_filename: false,
    });

    return result.secure_url;
  } catch (error) {
    throw error;
  }
};