import User from "../models/User.model.js";
import Project from "../models/Project.model.js";

export async function createProject(req, res) {
  try {
    const { title, description, startDate, endDate } = req.body;
    if (!title || !startDate || !endDate) {
      return res.status(400).json({ message: "Title, start date and end date are required" });
    }
    console.log(req.user);
    
    const project = new Project({
      title,
      description,
      owner: req.user._id,
      startDate,
      endDate,
    });
    await project.save();
    return res.status(201).json({ success: true, message: "Project created successfully", project });
  } catch (error) {
    console.error("Error creating project:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function getProjects(req, res) {
  try {
    const userId = req.user._id;
    const projects = await Project.find({ $or: [{ owner: userId }, { members: userId }] }).populate("owner", "name email").populate("members", "name email");
    return res.status(200).json({ success: true, projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function getProjectById(req, res) {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId).populate("owner", "name email").populate("members", "name email");
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    const userId = req.user._id;
    if (project.owner._id.toString() !== userId.toString() && !project.members.some(member => member._id.toString() === userId.toString())) {
      return res.status(403).json({ message: "Access denied" });
    }
    return res.status(200).json({ success: true, project });
  }
    catch (error) {
    console.error("Error fetching project:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateProject(req, res) {
  try {    const projectId = req.params.id;
    const { title, description, startDate, endDate, status } = req.body;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    const userId = req.user._id;
    if (project.owner.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only the project owner can update the project" });
    }
    project.title = title || project.title;
    project.description = description || project.description;
    project.startDate = startDate || project.startDate;
    project.endDate = endDate || project.endDate;
    project.status = status || project.status;
    await project.save();
    return res.status(200).json({ success: true, message: "Project updated successfully", project });
  }
    catch (error) {
    console.error("Error updating project:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteProject(req, res) {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    } 
    const userId = req.user._id;
    if (project.owner.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only the project owner can delete the project" });
    }
    await project.remove();
    return res.status(200).json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    return res.status(500).json({ message: "Internal server error" });
  } 
}

export async function inviteUser(req, res) {
  try {
    const projectId = req.params.id;
    const { email } = req.body;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    const userId = req.user._id;
    if (project.owner.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only the project owner can invite users" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (project.members.includes(user._id)) {
      return res.status(400).json({ message: "User is already a member of the project" });
    }
    project.members.push(user._id);
    await project.save();
    return res.status(200).json({ success: true, message: "User invited to the project successfully" });
  } catch (error) {
    console.error("Error inviting user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

