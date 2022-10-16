

const FooterComponent = () => {
    return(

        <div className="container-fluid footer bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-5.3 col-md-6">
                    <h5 className="text-light mb-4">Address</h5>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Ridiyagama Safari Park, Ridiyagama, Suriyawewa.</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>047 322 0042 / 047 362 0410</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>ridiyagamasafaripark@gmail.com</p>
                    <div className="d-flex pt-2">
                       
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Quick Links</h5>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Popular Links</h5>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="position-relative mx-auto" style="max-width: 400px;">
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">Ridiyagam Safari Park</a>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        Designed By <a className="border-bottom" href="">Kingpins</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );



}

export default FooterComponent;