import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000022", 
        fontFamily: "'Georgia', serif",  
      }}
      className="text-light pt-4"
    >
      <div className="container">
        <div className="row text-center text-md-start">
         
          <div className="col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">About Our School</h5>
            <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
              Our school is committed to providing a nurturing environment that
              promotes academic excellence, creative thinking, and character
              building. We aim to empower students to become confident,
              compassionate, and responsible global citizens.
            </p>
          </div>

         
          <div className="col-md-6 mb-4 text-md-end">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <div>
              <a
                href="#"
                className="text-light me-3"
                style={{ fontSize: "20px" }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-light me-3"
                style={{ fontSize: "20px" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-light me-3"
                style={{ fontSize: "20px" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-light me-3"
                style={{ fontSize: "20px" }}
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-light" style={{ fontSize: "20px" }}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-light" />

      
        <div className="text-center pb-3">
          <small>© 2025 prisha School Website. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
