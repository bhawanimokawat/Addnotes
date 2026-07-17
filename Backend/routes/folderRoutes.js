import express from "express";
import { createFolder, getFolders, updateFolder, deleteFolder,} from "../controllers/folderController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get( "/", protect, getFolders);

router.post("/",protect,createFolder);

router.patch("/:id",protect,updateFolder);

router.delete("/:id",protect,deleteFolder);

export default router;