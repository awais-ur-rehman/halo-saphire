import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '@/pages/auth/LoginPage'
import { ControlCenterPage } from '@/pages/dashboard/ControlCenterPage'
import { BranchesPage } from '@/pages/dashboard/BranchesPage'
import { CompetitorAnalysisPage } from '@/pages/dashboard/CompetitorAnalysisPage'
import { ReportsPage } from '@/pages/dashboard/ReportsPage'
import { SystemSettingsPage } from '@/pages/settings/SystemSettingsPage'
import { MainLayout } from '@/components/layout/MainLayout'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { ProtectedRoute } from './ProtectedRoute'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
        </Route>

        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/dashboard/control-center" replace />} />
          <Route path="control-center" element={<ControlCenterPage />} />
          <Route path="branches" element={<BranchesPage />} />
          <Route path="competitor-analysis" element={<CompetitorAnalysisPage />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>

        <Route path="/settings" element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }>
          <Route index element={<SystemSettingsPage />} />
        </Route>

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
} 