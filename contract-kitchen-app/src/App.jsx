import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Templates from './pages/Templates';
import AITools from './pages/AITools';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/ai-tools" element={<AITools />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;