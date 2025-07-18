import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

// Import images
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

export default function Testimonial() {
  return (
    <MDBContainer fluid className="custom-testimonial-container py-5">
      <MDBRow className="custom-row justify-content-center">
        <MDBCol md="10">
          <MDBCard className="custom-card shadow border-0">
            <MDBCardBody className="custom-card-body p-4">
              <MDBCarousel showIndicators showControls dark>
                <MDBCarouselItem>
                  <MDBRow className="custom-carousel-row justify-content-center">
                    <MDBCol lg="9">
                      <MDBRow className="align-items-center">
                        <MDBCol lg="3" className="custom-img-col mb-4 mb-lg-0">
                          <img
                            src={img1}
                            className="custom-avatar rounded-circle shadow-2"
                            alt="praneash avatar"
                            width="120"
                            height="120"
                          />
                        </MDBCol>
                        <MDBCol md="9" lg="9" className="custom-text-col text-center text-lg-start">
                          <h4 className="custom-name mb-4">Praneash - Web Developer</h4>
                          <p className="custom-testimonial-text mb-0 pb-3">
                          Praneash is a skilled web developer with a passion for crafting intuitive and responsive websites. With a keen eye for detail and a deep understanding of modern web technologies, Praneash transforms ideas into dynamic online experiences that engage and inspire users. His commitment to excellence ensures that each project is delivered with the highest quality and functionality.
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>
                <MDBCarouselItem>
                  <MDBRow className="custom-carousel-row justify-content-center">
                    <MDBCol lg="9">
                      <MDBRow className="align-items-center">
                        <MDBCol lg="3" className="custom-img-col mb-4 mb-lg-0">
                          <img
                            src={img2}
                            className="custom-avatar rounded-circle shadow-2"
                            alt="nithish avatar"
                            width="120"
                            height="120"
                          />
                        </MDBCol>
                        <MDBCol md="9" lg="9" className="custom-text-col text-center text-lg-start">
                          <h4 className="custom-name mb-4">Nithish - Graphic Designer</h4>
                          <p className="custom-testimonial-text mb-0 pb-3">
                          Nithish is a creative graphic designer with a flair for visual storytelling. His expertise in design and aesthetics brings brands to life through striking visuals and compelling graphics. Nithish’s innovative approach and attention to detail ensure that every design not only looks great but also effectively communicates the desired message, leaving a lasting impression                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>
                <MDBCarouselItem>
                  <MDBRow className="custom-carousel-row justify-content-center">
                    <MDBCol lg="9">
                      <MDBRow className="align-items-center">
                        <MDBCol lg="3" className="custom-img-col mb-4 mb-lg-0">
                          <img
                            src={img3}
                            className="custom-avatar rounded-circle shadow-2"
                            alt="asswinth avatar"
                            width="120"
                            height="120"
                          />
                        </MDBCol>
                        <MDBCol md="9" lg="9" className="custom-text-col text-center text-lg-start">
                          <h4 className="custom-name mb-4">Nithan - Marketing Specialist</h4>
                          <p className="custom-testimonial-text mb-0 pb-3">
                          Nithan is a strategic marketing specialist with a talent for driving brand growth and customer engagement. His expertise in market analysis campaign execution helps businesses connect with their target audiences in meaningful ways. Nithan’s results-driven approach and deep understanding of consumer behavior ensure that every marketing initiative achieves its maximum potential, delivering measurable success
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCarouselItem>
              </MDBCarousel>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
