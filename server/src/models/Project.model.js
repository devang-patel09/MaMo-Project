import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
    trim: true,
  },
  description:{
    type: String,
    default: '',
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  members:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  startDate:{
    type: Date,
    required: true,
  },
  endDate:{
    type: Date,
    required: true,
  },
  status:{
    type: String,
    enum: ['active', 'completed', 'archived'],
    default: 'active'
  }
} , { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

export default Project;