const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: String,
  lastname: String,
  phone: String,
  role: String,
  grade: Number,
  goal: Number,
  currentPoints: Number,
  totalPoints: Number,
  badges: [Number],
  relationships: [
    {
      recipient: Schema.Types.ObjectId,
      rStatus: String,
    }
  ],
  exercises: [Schema.Types.ObjectId],
  recommendedExercises: [Schema.Types.ObjectId],
  refreshToken: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
