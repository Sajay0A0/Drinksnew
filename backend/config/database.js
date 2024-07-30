

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sajay123:sajay123@cluster0.ujepkyl.mongodb.net/Menu?retryWrites=true&w=majority&appName=Cluster0', {
      // useNewUrlParser and useUnifiedTopology are no longer needed
    });
    console.log('Database connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;