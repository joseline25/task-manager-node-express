const mongoose = require("mongoose");

// création d'une collection (ou table si je faisais du relationnal)

const taskSchema = new mongoose.Schema({
  name: String,

  completed: Boolean,
  //   author: String,
  //   body: String,
  //   comments: [{ body: String, date: Date }],
  //   date: { type: Date, default: Date.now },
  //   meta: {
  //     votes: Number,
  //     favs: Number,
  //   },
});

module.exports = mongoose.model('Task', taskSchema);