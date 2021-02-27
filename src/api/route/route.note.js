import { NoteController }   from '../controller';

export default (router, middlewares) => {
    router.post('/note',        middlewares, NoteController.create);
    router.get('/note',         middlewares, NoteController.findAll);
    router.get('/note/:id',     middlewares, NoteController.findById);
    router.put('/note/:id',     middlewares, NoteController.update);
    router.delete('/note/:id',  middlewares, NoteController.deleteById);
    router.delete('/note',      middlewares, NoteController.deleteAll);
}
