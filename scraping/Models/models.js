import mongoose from "mongoose";

const { Schema } = mongoose;

const JournalSchema = new Schema({
  year: { type: Number},
  title:{ type: String},
  author:{type: String},
  authorDetails: {type: String},
  abstract: {type: String},
});

const Journal = mongoose.model("Journal", JournalSchema);
export default Journal;