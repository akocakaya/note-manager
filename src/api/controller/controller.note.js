import { NoteModel } from '../model';

export const create = (req, res) => {
    const note = new NoteModel({
        title: req.body.title,
        content: req.body.content
    });

    note.save(note)
        .then(data => {
            res
                .status(200)
                .send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || `Some error occured while creating a note`
                });
        });
};

export const findAll = (req, res) => {
    NoteModel.find({})
        .then(data => {
            res
                .status(200)
                .send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: err.message || `Some error occured while retrieving notes` });
        });
};

export const findById = (req, res) => {
    const id = req.params.id;

    NoteModel.findById(id)
        .then(data => {
            if(!data)
                res
                    .status(404)
                    .send({ message: `Not found note with id:${id}` });
            else
                res
                    .status(200)
                    .send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: err.message || `Some error occured while retrieving note with id:${id}` });
        });
};

export const update = (req, res) => {
    const id = req.params.id;

    NoteModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if(!data)
                res
                    .status(404)
                    .send({ message: `Cannot update note with id:${id}` });
            else
                res
                    .status(200)
                    .send({data});
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: err.message || `Some error occured while updating note with id:${id}` });
        });
};

export const deleteById = (req, res) => {
    const id = req.params.id;

    NoteModel.findByIdAndRemove(id)
        .then(data => {
            if(!data)
                res
                    .status(404)
                    .send({ message: `Cannot delete note with id:${id}` })
            else
                res
                    .status(200)
                    .send({ message: `Note deleted successfully with id:${id}` })
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: err.message || `Cannot update note with id:${id}` })
        })
};

export const deleteAll = (req, res) => {
    NoteModel.deleteMany({})
        .then(data => {
            res
                .status(200)
                .send({ message: `${data.deletedCount} notes were deleted successfully`});
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: err.message || `Some error occured while removing all notes.` })
        })

};
