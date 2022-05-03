import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    verified_email: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true, collection: 'users' },
);

export default mongoose.model('User', UserSchema);
