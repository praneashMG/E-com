import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact_us">
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-cell-block wk-desk-5 wk-ipadp-4 wk-tab-12 wk-mobile-12">
            <img
              className="mainImg"
              src="https://media.istockphoto.com/id/1201366590/photo/3d-communication-symbols-contact-info-symbols.jpg?s=612x612&w=0&k=20&c=QUSma-zDwXaWT6a9iSTvWebUkQVXd3cxd7pJpci0kE4="
              alt="Contact"
            />
          </div>
          <div className="responsive-cell-block wk-desk-7 wk-ipadp-8 wk-tab-12 wk-mobile-12">
            <p className="text-blk heading">Contact Me</p>
            <form className="formTable" id="izml">
              <div className="firstRow">
                <div className="fullNameArea">
                  <p className="cardHead">Full Name</p>
                  <input className="fullName" id="fullName" name="fullName" type="text" />
                </div>
                <div className="emailArea">
                  <p className="cardHead">Email Address</p>
                  <input className="email" id="email" name="email" type="text" />
                </div>
              </div>
              <div className="messageArea">
                <p className="cardHead">Message</p>
                <textarea className="message" cols="30" id="message" name="message" rows="10"></textarea>
              </div>
              <a className="submit" href="#" id="w-c-s-bgc_p-1-dm-id-4">
                Send Message
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
