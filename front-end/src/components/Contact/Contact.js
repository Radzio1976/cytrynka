import React from 'react';
import './contact.css';
import GoogleMapContainer from './GoogleMapContainer';
import AddressAndContactFormContainerTitle from './AddressAndContactFormContainerTitle';
import AddressAndContactFormContainerContentLeft from './AddressAndContactFormContainerContentLeft';
import AddressAndContactFormContainerContentRight from './AddressAndContactFormContainerContentRight';

class Contact extends React.Component {
    render() {
        return (
            <section id="Contact" style={{backgroundImage: "url('./images/washing-machine-drum.jpg')"}}>
                <div className="contact-container">
                    <GoogleMapContainer />
                    <div className="address-and-contact-form-container">
                        <AddressAndContactFormContainerTitle />
                        <div className="address-and-contact-form-container-content">
                            <AddressAndContactFormContainerContentLeft />
                            <AddressAndContactFormContainerContentRight />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;