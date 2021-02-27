import { NoteController }   from '../controller';
import checkAuth            from '../middleware/check-auth';

export default router => {
    router.post('/note',        checkAuth, NoteController.create);
    router.get('/note',         checkAuth, NoteController.findAll);
    router.get('/note/:id',     checkAuth, NoteController.findById);
    router.put('/note/:id',     checkAuth, NoteController.update);
    router.delete('/note/:id',  checkAuth, NoteController.deleteById);
    router.delete('/note',      checkAuth, NoteController.deleteAll);
}
