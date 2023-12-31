import File from "../model/file.js"
import dotenv from 'dotenv'

dotenv.config()

export const uploadFile = async (req, res) => {
    const fileObj = {
        path : req.file.path,
        name : req.file.originalname,
    }
    try {
           const file = await File.create(fileObj);
           res.status(200).json({path:`${process.env.API_URL}/file/${file._id}`})
    } catch(error) {
        console.log(`Error in uploadFile. Error => ${error}`)
        res.status(500).json({error : error.message})
    }
}


export const downloadFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId);
        file.downloadContent++;
        await file.save();
        res.download(file.path, file.name)
    } catch(error) {
        console.log(`Error in downloadFile. Error => ${error}`)
        res.status(500).json({error : error.message})
    }
}