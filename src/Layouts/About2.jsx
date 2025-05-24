import React from "react";
import Layout from "./Layout";

export default function About2() {
  return (
    <Layout>
      <div className="about3 pt-4 container">
        <h1 className="mb-4 mt-4 text-4xl font-sans font-bold text-center text-gray-800">
          How to get Admission
        </h1>

        <p
          className="mb-5"
          style={{ lineHeight: "1.7", fontSize: "1.1rem", color: "#444" }}
        >
          Aryabhatta Knowledge University (AKU Patna) is a collegiate public
          state university located in Mithapur, Patna, Bihar, India. It was
          named after the Indian astronomer Aryabhatta. Apart from a few notable
          exceptions, it is recognised and approved by AICTE. It is a statutory
          requirement for colleges offering any program in professional courses
          in the state to be affiliated with the university. It also has four
          schools: Centre for Geographical studies, Centre for River studies,
          Centre for Journalism and Mass Communication, Patliputra School of
          Economics.
        </p>

        <hr className="mb-5" />

        <div className="row">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src="https://img.freepik.com/free-photo/beautiful-cheerful-african-girl-reading-book_176420-5364.jpg?size=626&ext=jpg&ga=GA1.1.1149193680.1698220995&semt=ais"
                alt="Best For You"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Best For You</h5>
                <p className="card-text flex-grow-1">
                  The BCA program is suitable for students interested in
                  Computer Science who wish to pursue a career in the
                  technological industry. All BCA specialisations at UPES are
                  perfect for demonstrating their scientific curiosity.
                </p>
                <a href="#" className="btn btn-outline-success btn-sm mt-auto">
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src="https://img.freepik.com/premium-photo/portrait-young-african-american-student-black-man-background-college_8119-2339.jpg?size=626&ext=jpg&ga=GA1.1.1149193680.1698220995&semt=ais"
                alt="Artificial Intelligence and Machine Learning"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  Artificial Intelligence and Machine Learning
                </h5>
                <p className="card-text flex-grow-1">
                  A Bachelor of Computer Applications (BCA) degree with a
                  specialisation in Artificial Intelligence (AI) teaches
                  students the concepts and techniques required to design and
                  develop intelligent systems.
                </p>
                <a href="#" className="btn btn-outline-success btn-sm mt-auto">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src="https://img.freepik.com/free-photo/portrait-young-happy-blogger-with-modern-laptop-outdoors_231208-2072.jpg?size=626&ext=jpg&ga=GA1.1.1149193680.1698220995&semt=ais"
                alt="Data Science"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Data Science</h5>
                <p className="card-text flex-grow-1">
                  Data Science teaches students the skills to design, develop,
                  and implement IoT applications and systems. This
                  specialisation gives students an in-depth understanding of IoT
                  technologies, platforms, and protocols.
                </p>
                <a href="#" className="btn btn-outline-success btn-sm mt-auto">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src="https://img.freepik.com/free-photo/glamorous-female-student-red-jacket-sitting-yard-front-college-with-computer_197531-6968.jpg?size=626&ext=jpg&ga=GA1.1.1149193680.1698220995&semt=ais"
                alt="Best For You"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Best For You</h5>
                <p className="card-text flex-grow-1">
                  The BCA program is suitable for students interested in
                  Computer Science who wish to pursue a career in the
                  technological industry. All BCA specialisations at UPES are
                  perfect for demonstrating their scientific curiosity.
                </p>
                <a href="#" className="btn btn-outline-success btn-sm mt-auto">
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src="https://cdn.pixabay.com/photo/2023/09/17/19/10/building-8259184_1280.jpg"
                alt="Artificial Intelligence and Machine Learning"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  Artificial Intelligence and Machine Learning
                </h5>
                <p className="card-text flex-grow-1">
                  A Bachelor of Computer Applications (BCA) degree with a
                  specialisation in Artificial Intelligence (AI) teaches
                  students the concepts and techniques required to design and
                  develop intelligent systems.
                </p>
                <a href="#" className="btn btn-outline-success btn-sm mt-auto">
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src="https://img.freepik.com/premium-photo/cheerful-student-with-red-notebook-near-campus-passed-exam-said-yes_497171-631.jpg?size=626&ext=jpg&ga=GA1.1.1149193680.1698220995&semt=ais"
                alt="Data Science"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Data Science</h5>
                <p className="card-text flex-grow-1">
                  Data Science teaches students the skills to design, develop,
                  and implement IoT applications and systems. This
                  specialisation gives students an in-depth understanding of IoT
                  technologies, platforms, and protocols.
                </p>
                <a href="#" className="btn btn-outline-success btn-sm mt-auto">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
