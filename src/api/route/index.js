import NoteRoute from './route.note';
import AuthRoute from './route.auth';
import checkAuth from '../middleware/check-auth';

export default router => {
    NoteRoute(router, [checkAuth]);
    AuthRoute(router);
}
