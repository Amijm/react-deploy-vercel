import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">"Here, at Gericht, we understand cravings. We know how important it is to get your food fast, and we have a 1-hour delivery guarantee.
While we prepare our food fast, we develop the flavor slowly. Our dough rises over the night, and our meat is always marinated.That's why every chicken tender, every beef skewer, and every bun taste like heaven.Don’t let hunger take control of you.
Forget about the daily stress and come relax with us. After tasting any of our menu items, you will never want to leave!
Don't hesitate to pay us a visit" Beat it with Gericht!"</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">In 1998 brought the taste of her Nomnna's (grandmother's) cooking to life when she opened Gericht. Inspired by generations of family recipes passed down through the years, Gericht has become a beloved spot for authentic Germany cuisine.
We are passionate about using fresh, seasonal ingredients to create dishes that are bursting with flavor.Our warm and inviting atmosphere makes you feel right at home, just like Nomnna's kitchen.
Over the years, we've been honored to receive numerous awards for our delicious food and exceptional service.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
