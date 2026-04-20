import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import TemplateSelector from './pages/TemplateSelector';
import TemplateLayout from './components/templates/TemplateLayout';
import HomePage from './pages/template/HomePage';
import AvailabilityPage from './pages/template/AvailabilityPage';
import GalleryPage from './pages/template/GalleryPage';
import FAQsPage from './pages/template/FAQsPage';
import ContactPage from './pages/template/ContactPage';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<TemplateSelector />} />
      
      {/* Template Preview Routes */}
      <Route path="/preview" element={<TemplateLayout />}>
        <Route index element={<HomePage />} />
        <Route path="availability" element={<AvailabilityPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="faqs" element={<FAQsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App