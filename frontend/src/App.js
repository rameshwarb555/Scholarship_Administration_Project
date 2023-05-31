import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import StudentLogin from './pages/StudentLogin';
import TeacherLogin from './pages/TeacherLogin';
import RegistrationPage from './pages/NewStudentRagistration';
import ToggleColorMode from './components/ToggleColorMode';

const App = () => {
  return (
    <Router>
      <ToggleColorMode>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login/student" element={<StudentLogin />} />
          <Route path="/login/teacher" element={<TeacherLogin />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </ToggleColorMode>
    </Router>
  );
};

export default App;
