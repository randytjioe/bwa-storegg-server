const mongoose = require("mongoose");
let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "email harus diisi"],
    },
    name: {
      type: String,
      require: [true, "nama  harus dissi"],
      maxlength: [255, "panjang nama harus antara 3-255 karakter"],
      minlength: [255, "panjang nama harus antara 3-255 karakter"],
    },
    username: {
      type: String,
      require: [true, "username  harus dissi"],
      maxlength: [255, "panjang nama harus antara 3-255 karakter"],
      minlength: [255, "panjang nama harus antara 3-255 karakter"],
    },
    password: {
      type: String,
      require: [true, "password harus diisi"],
      maxlength: [255, "panjang nama harus antara 3-255 karakter"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    avatar: { type: String },
    fileName: { type: String },

    phoneNumber: {
      type: Number,
      require: [true, "nomor telepon harus dissi"],
      maxlength: [13, "panjang nama harus antara 9-13 karakter"],
      minlength: [9, "panjang nama harus antara 9-13 karakter"],
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Player", playerSchema);
