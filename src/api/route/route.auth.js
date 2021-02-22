import { UserController } from '../controller';

export default router => {
    router.post('/api/register',            UserController.register);
    router.post('/api/login',               UserController.login);
    router.post('/api/forget-password',     UserController.forgetPassword);
}
