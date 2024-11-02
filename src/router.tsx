import {createBrowserRouter} from 'react-router-dom'

import Layout from './containers/layout';
import UserMgt from './containers/user';

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <UserMgt />
            }
        ]
    }
])

export default router