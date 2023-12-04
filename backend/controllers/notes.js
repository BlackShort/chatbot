import { Chats } from "../models/notes.js";
import ErrorHandler from "../middlewares/error.js";

export const newNote = async (req, res, next) => {
    try {
        const { title, usermsg, apimsg } = req.body;

        await Chats.create({
            title,
            messages: [
                usermsg,
                apimsg,
            ],
            user: req.user,
        })

        res.status(201).json({
            success: true,
            message: "Note Added Successfully"
        });
    } catch (error) {
        next(error);
    }
}

export const getNotes = async (req, res, next) => {
    try {
        const userid = req.user._id;

        const notes = await Chats.find({ user: userid });
        res.status(200).json({
            success: true,
            notes,
        });
    } catch (error) {
        next(error);
    }
}

export const updateNotes = async (req, res, next) => {
    try {
        const notes = await Chats.findById(req.params.id);
        if (!notes) return next(new ErrorHandler("Note not found", 404));
        await notes.save();
        res.status(200).json({
            success: true,
            message: "Note Updated",
        });
    } catch (error) {
        next(error);
    }
}

export const deleteNotes = async (req, res, next) => {
    try {
        const notes = await Chats.findById(req.params.id);
        if (!notes) next(new ErrorHandler("Task not found", 404));
        await notes.deleteOne();
        res.status(200).json({
            success: true,
            message: "Note Dleted",
        });
    } catch (error) {
        next(error);
    }
}