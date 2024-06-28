import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LazyloaderSus from '../Components/Lazyloader/LazyloaderSus';
import ScrollToTop from './ScrollToTop';
import RouteErrorFallback from './RouteErrorFallback/RouteErrorFallback';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const Home = lazy(() => import('../Components/Home/Home'));
const Work = lazy(() => import('../Components/Work/Work'));
const About = lazy(() => import('../Components/About/About'));
const News = lazy(() => import('../Components/News/News'));

function Routing() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary fallback={<RouteErrorFallback />}>
              <Suspense fallback={<LazyloaderSus name="home" />}>
                <Home />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/work"
          element={
            <ErrorBoundary fallback={<RouteErrorFallback />}>
              <Suspense fallback={<LazyloaderSus name="work" />}>
                <Work />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/about"
          element={
            <ErrorBoundary fallback={<RouteErrorFallback />}>
              <Suspense fallback={<LazyloaderSus name="about" />}>
                <About />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/news"
          element={
            <ErrorBoundary fallback={<RouteErrorFallback />}>
              <Suspense fallback={<LazyloaderSus name="news" />}>
                <News />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Routes>
    </>
  );
}

export default Routing;
