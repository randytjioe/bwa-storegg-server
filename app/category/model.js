const mongoose = require("mongoose");
let categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name kategori harus diisi"],
  },
});
module.exports = mongoose.model("Category", categorySchema);
