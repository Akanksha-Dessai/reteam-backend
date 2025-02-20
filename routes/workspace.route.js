import express from 'express';
import { createWorkspace , getAllWorkspaces,deleteWorkspace } from '../controllers/workspace.controller.js';
//import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create',createWorkspace);
//router.post('/create', authMiddleware, createWorkspace);

//router.get('/user-workspaces', authMiddleware, getUserWorkspaces); // Fetch only logged-in user's workspaces

router.get("/all", getAllWorkspaces);

//router.delete("/:id", authMiddleware, deleteWorkspace);
router.delete("/:id", deleteWorkspace);

export default router;
