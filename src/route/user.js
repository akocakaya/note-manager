import * as UserController from '../controller/user';

export default (router) => {
    router.post('/create', UserController.createUser);
    router.post('/get', UserController.getUser);
    router.post('/update', UserController.updateUser);
}
