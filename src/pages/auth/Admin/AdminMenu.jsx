import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminMenu() {
  return (
    <div
      className="top-0 mt-3 start-0 bg-light border-end shadow-sm d-flex flex-column"
      style={{
        height: '75vh',
        width: '250px',        
        padding: '20px',
        overflowY: 'auto',
        zIndex: 1040,
      }}
    >
      <h1 className="h5 text-center mb-4" style={{ color: '#6a0dad' }}>
        STUDENTS PORTAL
      </h1>
      <div className="list-group list-group-flush">
        <h4 className="bg-secondary text-white p-3 rounded-top mb-0">STUDENTS MENU</h4>
        <NavLink className="list-group-item list-group-item-action py-2" to="/adminadmission">Profile</NavLink>
        <NavLink className="list-group-item list-group-item-action py-2" to="/studentadmission">Admission Student</NavLink>
        <NavLink className="list-group-item list-group-item-action py-2" to="/updatestudent/some-id">Update Student Information</NavLink>
        <NavLink className="list-group-item list-group-item-action py-2" to="/admissionall">See All Students Admission List</NavLink>
      </div>
    </div>
  );
}
