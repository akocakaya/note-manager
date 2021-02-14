import * as UserController from '../controller/user';

export default (router) => {
    router.post('/api/user/create', UserController.createUser);
    router.post('/api/user/get', UserController.getUser);
    router.post('/api/user/update', UserController.updateUser);
}
