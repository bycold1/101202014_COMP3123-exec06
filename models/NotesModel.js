//TODO - Create Note Schema here having fields
/*
{
     "noteTitle" = "Week exercise"
    "noteDescription" = "Hello world"
    "priority" = "HIGH"
     "dateAdded" = "2022/10/17"
     "dateUpdated" = "2022/10/16"
}
*/
const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true,
        values: ['HIGH', 'LOW', 'MEDIUM']
    },
    dateAdded: {
        type: Date,
        required: true
    },
    dateUpdated: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("note", noteSchema);