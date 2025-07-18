import React from 'react';
import pgr from "../images/img1.jpeg";

const AboutUs = () => {
    return (
        <div className="about-container">
            {/* Left Side Circular Image */}
            <div className="image-container">
                <div className="circular-image">
                    <img
                        src={pgr}
                        alt="Praneash"
                        className="circular-image__img"
                    />
                </div>
            </div>

            {/* Right Side Content */}
            <div className="content-container">
                <h1 className="content-title">About PRANEASH MG</h1>
                <p className="content-description">
                    Meet PRANEASH MG, a dynamic and innovative professional with a passion for technology and entrepreneurship. He is a skilled React developer with a deep understanding of modern web development practices and a keen eye for creating intuitive user interfaces.
                </p>
                <p className="content-description">
                    Praneash has been instrumental in driving forward-thinking projects and fostering a culture of creativity and innovation. His expertise in leveraging React to build high-quality, scalable applications has positioned him as a thought leader in his field.
                </p>
                <p className="content-description">
                    Outside of his professional achievements, Praneash is also a well-driven individual with a passion for biking. His love for biking serves as a refreshing extracurricular activity that complements his tech-driven lifestyle.
                </p>
                <p className="content-description">
                    Connect with Praneash on Instagram at <a href="https://www.instagram.com/im_praneash" target="_blank" rel="noopener noreferrer" className="content-link">im_praneash</a> and on LinkedIn at <a href="https://www.linkedin.com/in/praneash-mh" target="_blank" rel="noopener noreferrer" className="content-link">PRANEASH MH</a>. Discover more about his work and contributions to the technology landscape.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;