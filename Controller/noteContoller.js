const Note = require('../Models/noteModel');

exports.addNote = async (req, res) => {
    try {
        const { todo } = req.body;

        if (!todo) {
            return res.status(400).json({ message: 'Content are required' });
        }

        const newNote = new Note({ todo });
        await newNote.save();

        res.status(201).json({ message: 'Note added successfully', note: newNote });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.getNote = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.deleteNote=async(req,res)=>{
    try{
        const { id } = req.params;

        const deletedNote = await Note.findByIdAndDelete(id);
        res.status(200).json( deletedNote);
        
    }catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

exports.editNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { todo } = req.body; 

        if (!todo) {
            return res.status(400).json({ message: 'Content is required' });
        }

        const updatedNote = await Note.findByIdAndUpdate(
            id,
            { todo },
            { new: true, runValidators: true } 
        );

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json(error);
    }
};
