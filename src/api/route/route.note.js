import { NoteController } from '../controller'

export default router => {
    router.post('/api/note', NoteController.create);
    router.get('/api/note', NoteController.findAll);
    router.get('/api/note/:id', NoteController.findById);
    router.put('/api/note/:id', NoteController.update);
    router.delete('/api/note/:id', NoteController.deleteById);
    router.delete('/api/note', NoteController.deleteAll);
}
