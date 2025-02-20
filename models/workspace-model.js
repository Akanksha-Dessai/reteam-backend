import mongoose from 'mongoose';
export const UserRole = {
  SUPER_ADMIN: 'superadmin',
};
const workspaceSchema = new mongoose.Schema(
  {
    workspacename: {
      type: String,
      required: [true, 'Please provide name'],
      maxlength: 50,
      minlength: 4,
    },
    /*userName:*/
  },
  { timestamps: true }
);


const Workspace = mongoose.model('Workspace', workspaceSchema);
export default Workspace;


/*
import mongoose from 'mongoose';

export const UserRole = {
  SUPER_ADMIN: 'superadmin',
};

const workspaceSchema = new mongoose.Schema(
  {
    workspacename: {
      type: String,
      required: [true, 'Please provide name'],
      maxlength: 50,
      minlength: 3,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User collection
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      required: true,
    },
  },
  { timestamps: true }
);

const Workspace = mongoose.model('Workspace', workspaceSchema);
export default Workspace;
*/