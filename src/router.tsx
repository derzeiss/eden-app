import { createBrowserRouter, redirect } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { ChatsPage } from './pages/chats';
import { ChatsIdPage } from './pages/chats.$id';
import { WorkshopPage } from './pages/workshops';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', loader: () => redirect('/workshops') },
      { path: '/workshops', element: <WorkshopPage /> },
      { path: '/chats', element: <ChatsPage /> },
      { path: '/chats/:id', element: <ChatsIdPage /> },
    ],
  },
]);
