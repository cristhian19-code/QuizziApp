import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomeScreem } from "../components/home/HomeScreem";

import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 h-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <PublicRoute>
              <HomeScreem />
            </PublicRoute>
          } />
          <Route path="/*" element={
            <PrivateRoute/>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
