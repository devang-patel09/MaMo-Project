import mongoose from "mongoose";

const bugSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
    trim: true,
  },
  description:{
    type: String,
    required: true,
  },
  type:{
    type: String,
    enum: ['bug', 'feature', 'task'],
    default: 'task'
  },
  status:{
    type: String,
    enum: ['open', 'in progress','in review','resolved','closed'],
    default: 'open'
  },
  priority:{
    type: String,
    enum: ['low', 'medium', 'high','critical'],
    default: 'medium'
  },
  severity:{
    type: String,
    enum: ['trival','minor', 'major', 'critical'],
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  attachments:[{
    type: String,
  }],
  aiSummery:{
    type: String,
    default: '',
  },
  githubPRUrl:{
    type: String,
    default: '',
  },
  dueDate:{
    type: Date,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
} , { timestamps: true });

const Bug = mongoose.model("Bug", bugSchema);

export default Bug;