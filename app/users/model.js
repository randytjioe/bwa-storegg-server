const mongoose = require("mongoose");
let userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "email harus diisi"],
    },
    name: {
      type: String,
      require: [true, "name harus diisi"],
    },
    password: {
      type: String,
      require: [true, "password harus diisi"],
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

    phoneNumber: {
      type: String,
      require: [true, "nomor telepon harus diisi"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
