import { NoteController }   from '../controller';
import checkAuth            from '../middleware/check-auth';

export default router => {
    router.post('/api/note',        checkAuth, NoteController.create);
    router.get('/api/note',         checkAuth, NoteController.findAll);
    router.get('/api/note/:id',     checkAuth, NoteController.findById);
    router.put('/api/note/:id',     checkAuth, NoteController.update);
    router.delete('/api/note/:id',  checkAuth, NoteController.deleteById);
    router.delete('/api/note',      checkAuth, NoteController.deleteAll);
}
