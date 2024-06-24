import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Lazyloader from '../Components/Lazyloader/Lazyloader'
import ScrollToTop from './ScrollToTop'
const Home = lazy(() => import('../Components/Home/Home'))
const Work = lazy(() => import('../Components/Work/Work'))
const About = lazy(() => import('../Components/About/About'))
const News = lazy(() => import('../Components/News/News'))

function Routing() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Lazyloader name="home" />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/work"
          element={
            <Suspense fallback={<Lazyloader name="work" />}>
              <Work />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Lazyloader name="about" />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/news"
          element={
            <Suspense fallback={<Lazyloader name="news" />}>
              <News />
            </Suspense>
          }
        />
      </Routes>
    </>
  )
}

export default Routing