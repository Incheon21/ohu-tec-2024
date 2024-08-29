import mongoose, { Schema } from "mongoose";

const internshipSchema = new Schema({
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

const Internship =
  mongoose.models.Internship || mongoose.model("Internship", internshipSchema);

export default Internship;