import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
    
      <button
        className="btn btn-dark position-fixed top-0 start-0 m-2 d-md-none"
        onClick={toggleSidebar}
        style={{
          zIndex: 1100,
          fontSize: '24px',
          padding: '4px 10px',
        }}
      >
        &#8942;
      </button>

      
      <div
        className={`bg-light border-end shadow d-flex flex-column  top-0 start-0 mt-3 ${
          isOpen ? 'd-block' : 'd-none'
        } d-md-flex`}
        style={{
          height: '85vh',
          width: '300px',
          padding: '20px',
          overflowY: 'auto',
          fontFamily: `'Georgia', serif`,
          backgroundColor: '#f8f9fa', 
        }}
      >
      
        <button
          className="btn btn-sm btn-outline-danger d-md-none align-self-end mb-3"
          onClick={toggleSidebar}
        >
          ✕
        </button>

        <h1 className="h5 text-center mb-4" style={{ color: '#6a0dad' }}>
          STUDENTS PORTAL
        </h1>

        <div className="list-group list-group-flush">
          <h4 className="bg-secondary text-white p-3 rounded-top mb-2">
            STUDENTS MENU
          </h4>

          <NavLink className="list-group-item list-group-item-action py-2" to="/adminadmission">
            Profile
          </NavLink>
          <NavLink className="list-group-item list-group-item-action py-2" to="/studentadmission">
            Admission Student
          </NavLink>
          <NavLink className="list-group-item list-group-item-action py-2" to="/updatestudent/some-id">
            Update Student Information
          </NavLink>
          <NavLink className="list-group-item list-group-item-action py-2" to="/admissionall">
            See All Students Admission List
          </NavLink>
        </div>
      </div>
    </>
  );
}
