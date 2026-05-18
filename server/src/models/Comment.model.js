import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  bugId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bug',
    required: true,
  },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content:{
    type: String,
    required: true,
  },
  mentions:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],

} , { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;