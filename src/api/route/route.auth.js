import { UserController } from '../controller';

export default router => {
    router.post('/register',            UserController.register);
    router.post('/login',               UserController.login);
    router.post('/forget-password',     UserController.forgetPassword);
}
