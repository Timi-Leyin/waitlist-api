import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI ?? '';

export const config = async (db?: string): Promise<void> => {
  try {
    await mongoose.connect(db || MONGODB_URI, {
      //useNewUrlParser:true,
      //   useUnifiedTopology:true
    });
  } catch (err) {
    process.exit(1);
  }
};
