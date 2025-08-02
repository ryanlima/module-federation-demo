import { lazy, Suspense } from 'react';
import './App.css';
import { ErrorBoundary } from './components';

const UserProfile = lazy(() => import('user_profiles/UserProfile'));
const Notifications = lazy(() => import('notifications/Notifications'));

function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading Profile...</div>}>
          <UserProfile />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading Notifications...</div>}>
          <Notifications />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
