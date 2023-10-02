const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  contents: {
    type: String,
    required: true,
  }
});

const Matchup = model('Matchup', matchupSchema);

module.exports = Matchup;
