import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProviderWrapper } from './ThemeContext';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Tables from './components/Dashboard/Tables';
import Charts from './components/Dashboard/Charts';
import CalendarComponent from './components/Dashboard/Calendar';
import KanbanBoard from './components/Dashboard/KanbanBoard';
import './styles.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProviderWrapper>
      <Router>
        <div className="App">
          <Sidebar open={sidebarOpen} />
          <main className={sidebarOpen ? 'sidebar-open' : 'sidebar-hidden'}>
            <Topbar toggleSidebar={toggleSidebar} />
            <Routes>
              <Route path="/tables" element={<Tables />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/calendar" element={<CalendarComponent />} />
              <Route path="/kanban" element={<KanbanBoard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProviderWrapper>
  );
}

export default App;
