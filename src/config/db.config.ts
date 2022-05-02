import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/waitlist';

export const config = async (): Promise<boolean | undefined> => {
  try {
    await mongoose.connect(MONGODB_URI, {
      //  useNewUrlParser:true,
      //   useUnifiedTopology:true
    });
    console.log('MongoDB connected');
    return true;
  } catch (err) {
    console.log('MongoDB could not connect ');
    process.exit(1);
  }
};
