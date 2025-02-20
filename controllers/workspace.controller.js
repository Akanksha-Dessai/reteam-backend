import Workspace from '../models/workspace-model.js'; 

export const createWorkspace = async (req, res) => {
  try {
    const { workspacename } = req.body;
    
    /*
    // Extract user details from the request (assuming you have authentication middleware)
    const userId = req.user.id; // Adjust based on your auth system
    const role = req.user.role; 

    if (!userId || !role) {
      return res.status(401).json({ message: 'Unauthorized access' });
    }
*/
    const newWorkspace = new Workspace({
      workspacename,
     // createdBy: userId,
      //role,
    });

    await newWorkspace.save();
    res.status(201).json({ message: 'Workspace created successfully', workspace: newWorkspace });
  } catch (error) {
    res.status(500).json({ message: 'Error creating workspace', error: error.message });
    console.error(error);
  }
};



export const getUserWorkspaces = async (req, res) => {
    try {
      const userId = req.user.id; // Get user ID from authenticated request
  
      if (!userId) {
        return res.status(401).json({ message: 'Unauthorized access' });
      }
  
      // Fetch workspaces created by the logged-in user
      const workspaces = await Workspace.find({ createdBy: userId });
  
      res.status(200).json({ workspaces });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching workspaces', error: error.message });
    }
  };


  export const getAllWorkspaces = async (req, res) => {
    try {
      const workspaces = await Workspace.find(); // Fetch all workspaces
      res.status(200).json({ workspaces });
    } catch (error) {
      res.status(500).json({ message: "Error fetching workspaces", error: error.message });
    }
  };
  

export const deleteWorkspace = async (req, res) => {
  try {
    const workspaceId = req.params.id;
    console.log("🛠 Deleting workspace with ID:", req.params.id); // Log the received ID
    //const userId = req.user.id;
    //const userRole = req.user.role; // Assuming role is stored in req.user

    // Check if the workspace exists
    const workspace = await Workspace.findById(workspaceId);
    if (!workspace) {
      return res.status(404).json({ message: "Workspace not found" });
    }

    /*
    // Check if the user is the creator or a super admin
    if (workspace.createdBy.toString() !== userId && userRole !== "superadmin") {
      return res.status(403).json({ message: "Unauthorized: You cannot delete this workspace" });
    }
*/
    await Workspace.findByIdAndDelete(workspaceId);

    res.status(200).json({ message: "Workspace deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting workspace", error: error.message });
    console.error(error);
  }
};
