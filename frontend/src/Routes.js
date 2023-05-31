import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import StudentLogin from './pages/StudentLogin';
import TeacherLogin from './pages/TeacherLogin';
import RegistrationPage from './pages/NewStudentRagistration';
import { Dashboard } from './dashbord/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path='/login/student' element ={<StudentLogin/>}></Route>
      <Route path="/login/teacher" element ={<TeacherLogin/>}></Route>
      <Route path="/register" element ={<RegistrationPage/>}></Route>
      <Route path="/dashboard" element ={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default Routes;
