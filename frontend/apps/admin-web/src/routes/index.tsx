import AllQuote from '@/pages/dashboard/all-quote'
import GenerateReport from '@/pages/dashboard/generate-report'
import NewQuote from '@/pages/dashboard/new-quote'
import EnquiryPage from '@/pages/enquiries'
import EnquiryDetails from '@/pages/enquiries/details'
import Generators from '@/pages/generators'
import NotFound from '@/pages/not-found'
import Orders from '@/pages/orders'
import Report from '@/pages/report'
import Settings from '@/pages/settings'
import General from '@/pages/settings/general'
import { Suspense, lazy } from 'react'
import { Navigate, Outlet, redirect, useRoutes } from 'react-router-dom'
import Cookies from 'js-cookie'
const DashboardLayout = lazy(() => import('@/pages/layout'))
const LoginPage = lazy(() => import('@/pages/auth/login'))
const DashboardPage = lazy(() => import('@/pages/dashboard'))

// ----------------------------------------------------------------------

export default function AppRouter() {
	const token = Cookies.get('token')
	if (!token) {
		return <LoginPage />
	}
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
					index: true,
				},
				{
					path: 'enquiries',
					element: <EnquiryPage />,
				},
				{
					path: 'enquiries/:id',
					element: <EnquiryDetails />,
				},
				{
					path: 'new-quote',
					element: <NewQuote />,
				},
				{
					path: 'all-quote',
					element: <AllQuote />,
				},
				{
					path: 'generate',
					element: <GenerateReport />,
				},
				{
					path: 'orders',
					element: <Orders />,
				},
				{
					path: 'generators',
					element: <Generators />,
				},
				{
					path: 'report',
					element: <Report />,
				},
				{
					path: 'settings',
					element: <Settings />,
				},
				{
					path: '/settings/profile',
					element: <Settings />,
				},
				{
					path: '/settings/general',
					element: <General />,
				},
			],
		},
	]

	const publicRoutes = [
		{
			path: '/login',
			element: <LoginPage />,
			index: true,
		},
		{
			path: '/404',
			element: <NotFound />,
		},
		{
			path: '*',
			element: <Navigate to='/404' replace />,
		},
	]

	const routes = useRoutes([...dashboardRoutes, ...publicRoutes])

	return routes
}
