import UserList from './UserList';
import UserDetail from './UserDetail';
import UserPost from './UserPost';

export const userRoutes = [
    { path: '/', component: UserList },
    {
        path: '/:userId',
        component: UserDetail,
        children: [{ path: '/:userId', component: UserPost }]
    }
];
