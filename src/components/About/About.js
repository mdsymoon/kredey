import React from 'react';
import aboutImg from '../../images/about.svg';

const About = () => {
    return (
        <main className="About container mt-5 pt-5">
            <div className="row ">
                <div className="col-sm-6">
                    <h3 className="text-center mb-5">We Call Them <span className="fw-bold">Folio</span></h3>
                    <p className="fs-3">For us Folio is a pdf file which has simple and concise written content, that would help the reader to gain knowledge quickly.</p>
                    <p className="fs-3">An informative document on a certain topic, notes of a subject or any information in textual form is a folio.</p>
                </div>
                <div className="col-sm-6 d-flex">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </main>
    );
};

export default About;