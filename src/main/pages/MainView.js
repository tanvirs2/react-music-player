import React from "react";

function MainView(props) {

    const audioObjectHandler = () => {

    };

    return (
        <div>
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Refreshing</a>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Music</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Masthead*/}
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    {/* Masthead Avatar Image*/}
                    <img className="masthead-avatar mb-5" src="assets/img/music-tune.png" alt="" />
                    {/* Masthead Heading*/}
                    <h1 className="masthead-heading text-uppercase mb-0">Start Refreshing</h1>
                    {/* Icon Divider*/}
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* Masthead Subheading*/}
                    <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </header>
            {/* Portfolio Section*/}
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    {/* Portfolio Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Music Gallery</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>








                    {props.children}

                    {/* Portfolio Grid Items*/}
                    {/*{props.children}*/}
                    {/****************************/}








                </div>
            </section>
            {/* About Section*/}
            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">
                    {/* About Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* About Section Content*/}
                    <div className="row">
                        <div className="col-lg-4 ml-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                        <div className="col-lg-4 mr-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                    </div>
                    {/* About Section Button*/}
                    <div className="text-center mt-4">
                        <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/themes/freelancer/">
                            <i className="fas fa-download mr-2" />
                            Free Download!
                        </a>
                    </div>
                </div>
            </section>
            {/* Contact Section*/}
            <section className="page-section" id="contact">
                <div className="container">
                    {/* Contact Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* Contact Section Form*/}
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                            <form id="contactForm" name="sentMessage" noValidate="novalidate">
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Name</label>
                                        <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Email Address</label>
                                        <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Phone Number</label>
                                        <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Message</label>
                                        <textarea className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <br />
                                <div id="success" />
                                <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer*/}
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        {/* Footer Location*/}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                2215 John Daniel Drive
                                <br />
                                Clark, MO 65243
                            </p>
                        </div>
                        {/* Footer Social Icons*/}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f" /></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter" /></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in" /></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble" /></a>
                        </div>
                        {/* Footer About Text*/}
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Freelancer</h4>
                            <p className="lead mb-0">
                                Freelance is a free to use, MIT licensed Bootstrap theme created by
                                <a href="http://codebeyins.com">Start Bootstrap</a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Copyright Section*/}
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright © Your Website 2020</small></div>
            </div>
            {/* Scroll to Top Button (Only visible on small and extra-small screen sizes)*/}
            <div className="scroll-to-top d-lg-none position-fixed">
                <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up" /></a>
            </div>
            {/* Portfolio Modals*/}


        </div>
    );
}

export default MainView;