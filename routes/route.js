import express from "express";
import { addMusicLog, deleteMusicLog, getMusicLog, getMusicLogByID, updateMusicLog } from "../controllers/appController.js";

const router = express.Router();

router.get('/', getMusicLog)
router.get('/music/:id', getMusicLogByID)
router.post('/add', addMusicLog)
router.patch('/update/:id', updateMusicLog)
router.delete('/delete/:id', deleteMusicLog)

export default router;
