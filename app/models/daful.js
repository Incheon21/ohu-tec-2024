import mongoose, { Schema } from "mongoose";

const dafulSchema = new Schema({
  email: {
    type: String,
    required: true,
  },

  nama: {
    type: String,
    required: true,
  },

  nim: {
    type: String,
    required: true,
  },

  fakultas: {
    type: String,
    required: true,
  },

  jurusan: {
    type: String,
    required: true,
  },

  idLine: {
    type: String,
    required: true,
  },

  buktiBayar: {
    type: String,
    required: true,
  },

  buktiPersyaratan: {
    type: String,
    required: true,
  },
});

const Daful =
  mongoose.models.Daful || mongoose.model("Daful", dafulSchema);

export default Daful;