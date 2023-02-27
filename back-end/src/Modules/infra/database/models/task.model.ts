import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  urgency: {
    type: String,
    required: true,
  },
  id_user: {
    type: String,
    required: true,
  },
  created_At: {
    type: String,
    required: true,
  },
  end_At: {
    type: String,
    required: true,
  },
});

export const taskModel = mongoose.model("Tasks", taskSchema);
