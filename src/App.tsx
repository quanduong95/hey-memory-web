import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { SignIn } from './pages/SignIn/SignIn';
import { Home } from './pages/Home/Home';
import { SignUp } from './pages/SignUp/SignUp';
const queryClient = new QueryClient();
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {' '}
      <Router>
        <Routes>
          {' '}
          <Route
            key={uuidv4()}
            path='/'
            element={<Home />}
          />
          <Route
            key={uuidv4()}
            path='/signin'
            element={<SignIn />}
          />
          <Route
            key={uuidv4()}
            path='/signup'
            element={<SignUp />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};
