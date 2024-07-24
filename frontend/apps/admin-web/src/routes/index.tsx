import AllQuote from '@/pages/dashboard/all-quote';
import NewQuote from '@/pages/dashboard/new-quote';
import EnquiryPage from '@/pages/enquiries';
import EnquiryDetails from '@/pages/enquiries/details';
import NotFound from '@/pages/not-found';
import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

const DashboardLayout = lazy(
  () => import('@/pages/layout')
);
const LoginPage = lazy(() => import('@/pages/auth/login'));
const DashboardPage = lazy(() => import('@/pages/dashboard'));
// const StudentPage = lazy(() => import('@/pages/students'));
// const StudentDetailPage = lazy(
//   () => import('@/pages/students/StudentDetailPage')
// );

// ----------------------------------------------------------------------

export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: '/',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <DashboardPage />,
          index: true
        },
        {
          path: 'enquiries',
          element: <EnquiryPage />
        },
        {
          path: 'enquiries/:id',
          element: <EnquiryDetails />
        },
        {
          path: 'new-quote',
          element: <NewQuote />
        },
        {
          path: 'all-quote',
          element: <AllQuote />
        }
      ]
    }
  ];

  const publicRoutes = [
    {
      path: '/login',
      element: <LoginPage />,
      index: true
    },
    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ];

  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}