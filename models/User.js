// C:\Users\josep\OneDrive\Desktop\lpt-cra\server\models\User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model('users', userSchema);
