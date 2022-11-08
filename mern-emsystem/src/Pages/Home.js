import React,{useState} from "react";

const HomeComponent = () => {
    return(
        <>
        <div class="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="img/my/15.jpg" alt="Image"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <h1 class="display-1 text-white mb-5 animated slideInDown">Welcome to Ridiyagama Safari Park.</h1>
                                    <a href="" class="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="img/my/14.jpg" alt="Image"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-7">
                                    <h1 class="display-1 text-white mb-5 animated slideInDown">Lion Zone</h1>
                                    <a href="" class="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				
				  <div class="carousel-item">
                    <img class="w-100" src="img/my/16.jpg" alt="Image"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-7">
                                    <h1 class="display-1 text-white mb-5 animated slideInDown">Tiger Zone</h1>
                                    <a href="" class="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				
				  
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div> 



<div class="container-xxl py-5">
<div class="container">
    <div class="row g-5">
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p><span class="text-primary me-2">#</span>Welcome To Ridiyagama Safari Park</p>
            <h1 class="display-5 mb-4">Why You Should Visit <span class="text-primary">Ridiyagama Safari</span> Park!</h1>
            <p class="mb-4">Add Details</p>
            <h5 class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Safari</h5>
            <h5 class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Natural Environment</h5>
            <h5 class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Professional Guide & Security</h5>
            <h5 class="mb-3"><i class="far fa-check-circle text-primary me-3"></i>Animals in Free Environment</h5>
            
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            
            <img class="img-fluid" src="img/my/2.jpg" alt=""/>
            
        </div>
    </div>
</div>
</div>


<div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="col-lg-6">
                    <p><span class="text-primary me-2">#</span>Our Services</p>
                    <h1 class="display-5 mb-0">Special Services For <span class="text-primary">Safari</span> Visitors</h1>
                </div>
                
            </div>
            <div class="row gy-5 gx-4">
                <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <i class="fa-solid fa-square-parking fa-7x"></i>
                    <h5 class="mb-3">Car Parking</h5>
                    <span>Add Details.</span>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <i class="fa-solid fa-camera fa-7x"></i>
                    <h5 class="mb-3">Animal Photos</h5>
                    <span>Add Details.</span>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <i class="fa-solid fa-compass fa-7x"></i>
                    <h5 class="mb-3">Guide Services</h5>
                    <span>Add Details.</span>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <i class="fa-solid fa-burger fa-7x"></i>
                    <h5 class="mb-3">Food & Beverages</h5>
                    <span>Add Details.</span>
                </div>
			     <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
                  <i class="fa-solid fa-bag-shopping fa-7x"></i>
                    <h5 class="mb-3">Zoo Shopping</h5>
                    <span>Add Details.</span>
                </div>
				 <div class="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="1.1s">
                  <i class="fa-solid fa-hat-cowboy fa-7x"></i>
                    <h5 class="mb-3">Resting Places</h5>
                    <span>Add Details.</span>
                </div>
            </div>
        </div>
    </div>




    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 mb-5 align-items-end wow fadeInUp" data-wow-delay="0.1s">
                <div class="col-lg-6">
                    <p><span class="text-primary me-2">#</span>visiting Hours</p>
                    <h1 class="display-5 mb-0">Feel Free to <span class="text-primary">Visit</span></h1>
                </div>
            </div>
            <div class="container-xxl bg-primary visiting-hours py-5 wow fadeInUp" data-wow-delay="0.1s" style="margin: 6rem 0;">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-md-8 wow fadeIn" data-wow-delay="0.3s">
                            <h1 class="display-6 text-white mb-5">Visiting Hours : </h1>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <span>Monday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li class="list-group-item">
                                    <span>Tuesday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li class="list-group-item">
                                    <span>Wednesday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li class="list-group-item">
                                    <span>Thursday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li class="list-group-item">
                                    <span>Friday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li class="list-group-item">
                                    <span>Saturday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li class="list-group-item">
                                    <span>Sunday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li class="list-group-item">
                                    <span>*Close at every Poya Day</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6 text-light wow fadeIn" data-wow-delay="0.5s">
                            <h1 class="display-6 text-white mb-5">Contact Info : </h1>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Office </td>
                                        <td>Ridiyagama Safari Park, Ridiyagama, Suriyawewa.</td>
                                    </tr>
                                    <tr>
                                        <td>Park </td>
                                        <td>Ridiyagama Safari Park, Ridiyagama, Suriyawewa.</td>
                                    </tr>
                                    <tr>
                                        <td>Ticket </td>
                                        <td>
                                            <p class="mb-2">047 322 0042 / 047 362 0410</p>
                                            <p class="mb-0">ridiyagamasafaripark@gmail.com</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Support </td>
                                        <td>
                                            <p class="mb-2">047 322 0042 / 047 362 0410</p>
                                            <p class="mb-0">ridiyagamasafaripark@gmail.com</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <div class="container-fluid footer bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-5.3 col-md-6">
                    <h5 class="text-light mb-4">Address</h5>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Ridiyagama Safari Park, Ridiyagama, Suriyawewa.</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>047 322 0042 / 047 362 0410</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>ridiyagamasafaripark@gmail.com</p>
                    <div class="d-flex pt-2">
                       
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Quick Links</h5>
                    <a class="btn btn-link" href="">About Us</a>
                    <a class="btn btn-link" href="">Contact Us</a>
                    <a class="btn btn-link" href="">Our Services</a>
                    <a class="btn btn-link" href="">Terms & Condition</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Popular Links</h5>
                    <a class="btn btn-link" href="">About Us</a>
                    <a class="btn btn-link" href="">Contact Us</a>
                    <a class="btn btn-link" href="">Our Services</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="position-relative mx-auto" style="max-width: 400px;">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">Ridiyagam Safari Park</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        Designed By <a class="border-bottom" href="">Kingpins</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    

</>


        

    );

}
export default HomeComponent;