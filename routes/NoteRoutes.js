const express = require('express')
const NoteModel = require('../models/NotesModel');
const app= express.Router()
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    console.log(req.body)
    // Validate request
    if(!req.body.noteTitle) {
        return res.status(300).send({
            message: "Note content can not be empty"
        });
    }
    const note = new NoteModel(req.body)
    try {
        await newNote.save()
        res.send(note)
    } catch (error) {
        res.status(500).send(error)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }try {
        const notes = await NoteModel.find({})
        res.send(notes)
    } catch (error) {
        res.status(500).send(error)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try {
        const note = await NoteModel.findById(req.params.noteId).exec();
        res.status(200).send(note);
    } catch (error) {
        res.status(500).send({
            error: "Error"
        })
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    if(!req.params.noteId) {
        return res.status(300).send({
            message: "Missing ID."
        });
    }
    if(!req.body.noteTitle) {
        return res.status(400).send({
            message: "Missing tittle."
        });
    }

    try {
        const note = await NoteModel.findByIdAndUpdate(req.params.noteId, 
            {noteTitle: req.body.noteTitle});

        if(!note)
        res.status(333).send({message: "couldn't find note" + req.params.noteId});
        res.status(222).send(note);
    }
    catch(error) {
        res.status(450).send(error);
    }
});
//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId',async (req, res) => {
     // Validate request
     if(!req.params.noteId) {
        return res.status(400).send({
            message: "ID is missing."
        });
    }
    try {
        const note = await NoteModel.findByIdAndRemove(req.params.noteId);
        res.status(200).send("Deleted " + req.params.noteId);
    } catch (error) {
        res.status(500).send({
            error: "Error"
        })
    }
});
module.exports = app