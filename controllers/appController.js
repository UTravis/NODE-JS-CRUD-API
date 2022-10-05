import musicLogModel from "../model/dbModel.js";


export const getMusicLog = async (req, res) => {
    try {
        const logs = await musicLogModel.find();
        res.status(200).json(logs)
    } catch (error) {
        res.status(404).json({error : error.message})
    }
}

export const getMusicLogByID = async (req, res) => {
    try {
        const musicLog = await musicLogModel.findById(req.params.id)
        res.status(302).json(musicLog)
    } catch (error) {
        res.status(404).json({error : error.message})
    }
}

export const addMusicLog = async (req, res) => {
    const newLog = new musicLogModel(req.body)
    try {
        await newLog.save()
        res.status(201).json(newLog)
    } catch (error) {
        res.status(409).json({error : error.message})
    }
}

export const updateMusicLog = async (req, res) => {
    try {
        const log = await musicLogModel.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(log)
    } catch (error) {
        res.status(409).json({ error : error.message })
    }
}

export const deleteMusicLog = async (req, res) => {
    try {
        await musicLogModel.findByIdAndDelete(req.params.id)
        const musicLogs = await musicLogModel.find()
        res.status(200).json(musicLogs)        
    } catch (error) {
        res.status(409).json({ error : error.message })
    }
}