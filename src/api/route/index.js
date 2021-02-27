import NoteRoute from './route.note';
import AuthRoute from './route.auth';

export default router => {
    NoteRoute(router)
    AuthRoute(router)
}
