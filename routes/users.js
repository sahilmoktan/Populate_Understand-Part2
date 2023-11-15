const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pinterestDb')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post', // Assuming you have a separate 'Post' model
    }
  ],
  dp: {
    type: String, // You can store the path or URL to the user's display picture
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
});

module.exports= mongoose.model('User', userSchema);


