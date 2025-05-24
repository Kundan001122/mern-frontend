import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <>
      <div
        className="d-flex align-items-center"
        style={{
          minHeight: "320px",
          background: "linear-gradient(135deg, #4B6CB7 0%, #182848 100%)",
          color: "#f0f0f0",
          padding: "60px 20px",
          borderRadius: "12px",
          margin: "60px auto 30px auto",
          maxWidth: "1100px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        }}
      >
        <div className="flex-grow-1 pe-4">
          <h1 style={{ fontWeight: "700", fontFamily: "'Georgia', serif" }}>
            Private School
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              maxWidth: "600px",
              marginTop: "12px",
              fontFamily: "'Georgia', serif",
            }}
          >
            Whether you’re accepting admissions applications, student exchange program applications, or professional courses in the state to be affiliated with the university. Studies include Centre for River studies, Centre for Journalism and Mass Communication, Patliputra School of Economics.
          </p>
          <NavLink
            to="/about2"
            className="btn"
            style={{
              marginTop: "20px",
              backgroundColor: "#ff6f61",
              color: "#fff",
              padding: "10px 28px",
              fontWeight: "600",
              borderRadius: "6px",
              boxShadow: "0 4px 10px rgb(255 111 97 / 0.6)",
              textDecoration: "none",
              display: "inline-block",
              transition: "background-color 0.3s ease",
              fontFamily: "'Georgia', serif",
            }}
            onMouseEnter={e => (e.target.style.backgroundColor = "#e65c4f")}
            onMouseLeave={e => (e.target.style.backgroundColor = "#ff6f61")}
          >
            Visit Us To Know More
          </NavLink>
        </div>
        <div className="d-none d-md-block" style={{ maxWidth: "380px" }}>
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
            alt="School"
            style={{ borderRadius: "12px", width: "100%", boxShadow: "0 6px 15px rgba(0,0,0,0.3)" }}
          />
        </div>
      </div>

      <section
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "0 15px",
          fontFamily: "'Georgia', serif",
        }}
      >
        <h2
          style={{
            fontWeight: "700",
            fontSize: "2.5rem",
            color: "#182848",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          School Admission
        </h2>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto 40px auto",
            fontSize: "1.1rem",
            color: "#444",
            lineHeight: "1.7",
            textAlign: "center",
            fontFamily: "'Georgia', serif",
          }}
        >
          Aryabhatta Knowledge University (AKU Patna) is a collegiate public state university located in Mithapur, Patna, Bihar, India. It was named after the Indian astronomer Aryabhatta. It is recognised and approved by AICTE. It is a statutory requirement for colleges offering any professional courses in the state to be affiliated with the university. It has four schools: Centre for Geographical Studies, Centre for River Studies, Centre for Journalism and Mass Communication, Patliputra School of Economics.
        </p>

        <div className="row g-4">
          {[
            {
              title: "Best For You",
              img: "https://img.freepik.com/free-photo/beautiful-cheerful-african-girl-reading-book_176420-5364.jpg?size=626&ext=jpg&ga=GA1.1.1149193680.1698220995&semt=ais",
              desc:
                "The BCA program is suitable for students interested in Computer Science who wish to pursue a career in the technological industry. All BCA specialisations at UPES demonstrate scientific curiosity.",
            },
            {
              title: "Artificial Intelligence and Machine Learning",
              img: "https://img.freepik.com/premium-photo/portrait-young-african-american-student-black-man-background-college_8119-2339.jpg?size=626&ext=jpg&ga=GA1.1.1149193680.1698220995&semt=ais",
              desc:
                "A Bachelor of Computer Applications (BCA) degree with a specialisation in Artificial Intelligence (AI) teaches students the concepts and techniques required to design and develop intelligent systems.",
            },
            {
              title: "Data Science",
              img: "https://img.freepik.com/free-photo/portrait-young-happy-blogger-with-modern-laptop-outdoors_231208-2072.jpg?size=626&ext=jpg&ga=GA1.1.1149193680.1698220995&semt=ais",
              desc:
                "Data Science teaches students the skills to design, develop, and implement IoT applications and systems. This specialisation gives students an in-depth understanding of IoT technologies.",
            },
            {
              title: "Best For You",
              img: "https://img.freepik.com/free-photo/glamorous-female-student-red-jacket-sitting-yard-front-college-with-computer_197531-6968.jpg?size=626&ext=jpg&ga=GA1.1.1149193680.1698220995&semt=ais",
              desc:
                "The BCA program is suitable for students interested in Computer Science who wish to pursue a career in the technological industry. All BCA specialisations at UPES demonstrate scientific curiosity.",
            },
            {
              title: "Artificial Intelligence and Machine Learning",
              img: "https://cdn.pixabay.com/photo/2023/09/17/19/10/building-8259184_1280.jpg",
              desc:
                "A Bachelor of Computer Applications (BCA) degree with a specialisation in Artificial Intelligence (AI) teaches students the concepts and techniques required to design and develop intelligent systems.",
            },
            {
              title: "Data Science",
              img: "https://img.freepik.com/premium-photo/cheerful-student-with-red-notebook-near-campus-passed-exam-said-yes_497171-631.jpg?size=626&ext=jpg&ga=GA1.1.1149193680.1698220995&semt=ais",
              desc:
                "Data Science teaches students the skills to design, develop, and implement IoT applications and systems. This specialisation gives students an in-depth understanding of IoT technologies.",
            },
          ].map(({ title, img, desc }, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                  backgroundColor: "#fff",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={img}
                  alt={title}
                  style={{ width: "100%", height: "190px", objectFit: "cover" }}
                />
                <div style={{ padding: "20px", flexGrow: 1 }}>
                  <h5
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontWeight: "600",
                      marginBottom: "12px",
                      color: "#182848",
                    }}
                  >
                    {title}
                  </h5>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#555",
                      lineHeight: "1.4",
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    {desc}
                  </p>
                </div>
                <div style={{ padding: "0 20px 20px" }}>
                  <a
                    href="#"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#ff6f61",
                      color: "#fff",
                      padding: "8px 22px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontWeight: "600",
                      boxShadow: "0 6px 12px rgb(255 111 97 / 0.5)",
                      transition: "background-color 0.3s ease",
                      fontFamily: "'Georgia', serif",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#e65c4f")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6f61")}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
