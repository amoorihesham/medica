import Layout from '@/layout/main-layout/Layout';
import { createBrowserRouter } from 'react-router-dom';
import paths from './paths';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('@/features/home/Page'));
const ProductsPage = lazy(() => import('@/features/products/Page'));

const router = createBrowserRouter([
  {
    path: paths.ROOT,
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback='Loading...'>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: paths.PRODUCTS,
        element: (
          <Suspense fallback='Loading...'>
            <ProductsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
