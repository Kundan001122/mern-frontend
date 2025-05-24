import React from "react";
import Layout from "../../Layout";

export default function Bba() {
  return (
    <Layout>
      <>
        <section id="gallery pt-5">
          <div className="">
            <hr></hr>
            <h1 className="text-success main3">
              <span style={{ color: "white" }}>About BBA Course</span>
            </h1>
            <p className="about_3">
              List of Diploma in engineering courses- Diploma in Engineering is
              a 3-year degree that students can take after Class 10th/12th. The
              list of Diploma courses is given below- Diploma in Computer
              Science Engineering Diploma in Electronics and Communication
              Engineering Diploma in Mechanical Engineering Diploma in
              Electrical Engineering Diploma in Civil Engineering Diploma in
              Chemical Engineering Diploma in Electrical and Electronics
              Engineering
            </p>
            <hr></hr>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Best For You</h5>
                    <p>
                      The BCA program is suitable for students with an
                      interested in Computer Science who wish to pursue a career
                      in the technological industry. All BCA specialisations at
                      UPES are perfect for demonstrating their scientific
                      curiosity
                    </p>
                    <a className="btn btn-outline-success btn-sm" id="myBtn">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Artificial Intelligence and Machine Learning
                    </h5>
                    <p className="card-text">
                      A Bachelor of Computer Applications (BCA) degree with a
                      specialisation in Artificial Intelligence (AI) teaches
                      students the concepts and techniques required to design
                      and develop intelligent systems
                    </p>
                    <a href="" className="btn btn-outline-success btn-sm">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Data Science</h5>
                    <p className="card-text">
                      Data Science teaches students the skills to design,
                      develop, and implement IoT applications and systems. This
                      specialisation gives students an in-depth understanding of
                      IoT technologies, platforms, and protocols, enabling them{" "}
                    </p>
                    <a href="" className="btn btn-outline-success btn-sm">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
}
