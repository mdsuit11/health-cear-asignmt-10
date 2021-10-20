import React from 'react';
import './About.css';
import img1 from './images.jpg'

const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
           <img src={img1} alt="" />

           <p>
           Naturopathic medicine is a system that uses natural remedies to help the body heal itself. It embraces many therapies, including herbs, massage, acupuncture, exercise, and nutritional counseling.
            Naturopathy was brought to the United States from Germany in the 1800s, but some of its treatments are centuries old. Today, it combines traditional treatments with sme aspects of modern science.
           </p>
           <h3>
           How Does It Work?
           </h3>
           <p>
            The goal of naturopathic medicine is to treat the whole person -- that means mind, body, and spirit. It also aims to heal the root causes of an illness -- not just stop the symptoms.
            A naturopathic doctor may spend 1 to 2 hours examining you. They’ll ask questions about your health history, stress levels, and lifestyle habits. They may order lab tests.
            Afterwards, they will typically discuss your personal health plan. Naturopathic medicine focuses on education and prevention, so your doctor may give you diet, exercise, or stress management tips. They might use complementary medicine -- like homeopathy, herbal medicine, and acupuncture -- in addition to naturopathic treatments. They may also use touch, such as massage and pressure, to create balance in your body. This is called naturopathic manipulative therapy.
           </p>
           
        </div>
    );
};

export default About;