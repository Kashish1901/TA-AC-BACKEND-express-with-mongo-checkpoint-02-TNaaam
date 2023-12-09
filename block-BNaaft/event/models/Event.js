var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema(
  {
    title: { type: String, required: true },
    summary: String,
    host: String,
    start_date: Date,
    end_date: Date,
    category: [String],
    likes: { type: Number, default: 0 },
    remarkId: { type: Schema.Types.ObjectId, ref: "Remark", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.Model("Event", eventSchema);
