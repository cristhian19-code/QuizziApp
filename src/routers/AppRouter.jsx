import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute';
import { AuthScreen } from '../components/auth/AuthScreen';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components/ui/Loading';
import { setUser } from '../actions/auth';
import { useState } from 'react';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(setUser());
    setTimeout(() => {
      setLoading(true)
    }, 1000);
  }, [])

  if (!loading) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen overflow-x-hidden relative">
        <Routes>
          <Route path="/auth" element={
            <PublicRoute>
              <AuthScreen />
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
