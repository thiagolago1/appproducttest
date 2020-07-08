import mongoose from "mongoose";

const uri: string = 'mongodb://127.0.0.1:27017/crudapptest';
mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log("Connection Sucessfully with MongoDB");
  }
});

export const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String, required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UsersSchema);

export default User;
