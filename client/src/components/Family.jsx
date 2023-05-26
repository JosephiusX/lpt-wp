import React from 'react';

const Family = () => {
  return (
    <section className="section-family" id="section-family">
    <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
            Meet Our Family
        </h2>
    </div>

    <div className="row">
        <div className="col-1-of-3">
           <div className="card">
               <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">Charlie Guyard</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li  className='heading-secondary'>Private Chef</li>
                            <li>Over 20 years of experience</li>
                            <li>Culinary artisan</li>
                            <li>Baker</li>
                            <li></li>
                        </ul>
                    </div>
               </div>
               <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__about-me">Chef Charlie is a talented French baker with over 20 years of experience. His passion for food led him from France to London and eventually to California. After working in top Italian restaurants in San Francisco, he decided to create his own unique culinary experience. Inspired by his love for seasonal ingredients and innovative recipes, Chef Charlie founded the Little Pizza Truck, featuring a stunning Italian oven on wheels.</p>
                            {/* <p className="card__price-value">$297</p> */}
                        </div>
                        {/* <a href="#popup" className="btn btn--white">Book now!</a> */}
                    </div>
                </div>
           </div>
        </div>


        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--2">Carla Guyard </span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li className='heading-secondary'>Operations</li>
                            <li>Buisness Management</li>
                            <li>Event Planning</li>
                            <li>Contract Management</li>
                        </ul>
                    </div>

                </div>
                <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__about-me">Carla, a California native with a background in business management, has experience in various operational roles. Her passion for creating connections led her to excel in event planning. Seeking to combine her creativity and professional skills, she and her husband founded the Little Pizza Truck. As a seasoned professional and a dedicated mom, Carla is the key to ensuring smooth operations and memorable events for all.</p>
                            {/* <p className="card__price-value">$497</p> */}
                        </div>
                        {/* <a href="#popup" className="btn btn--white">Book now!</a> */}
                    </div>
                </div>
            </div>
        </div>


        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--3">Kaia Guyard</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li className='heading-secondary'>Taste Tester</li>
                            <li>Clean-up</li>
                        </ul>
                    </div>

                </div>
                <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__about-me u-margin-top-medium">Kaia is Charlie and Carla's rescue pup who absolutely loves her roles as their model, taste tester, and clean-up crew. She is sweet, goofy, and super-loving. If you come by their place for a tasting and want to meet her, make sure to let them know! She would absolutely love it and would be available to help with any extra scraps.</p>
                            {/* <p className="card__price-value">$897</p> */}
                        </div>
                        {/* <a href="#popup" className="btn btn--white">Book now!</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="u-center-text u-margin-top-huge">
        {/* <a href="#" className="btn btn--green">Discover all tours</a> */}
    </div>
</section>
  );
};

export default Family;