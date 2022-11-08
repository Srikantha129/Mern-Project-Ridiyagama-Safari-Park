

const VisitinghoursComponent = () =>{
    return(
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 mb-5 align-items-end wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <p><span className="text-primary me-2">#</span>visiting Hours</p>
                    <h1 className="display-5 mb-0">Feel Free to <span className="text-primary">Visit</span></h1>
                </div>
            </div>
            <div className="container-xxl bg-primary visiting-hours py-5 wow fadeInUp" data-wow-delay="0.1s" style="margin: 6rem 0;">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-8 wow fadeIn" data-wow-delay="0.3s">
                            <h1 className="display-6 text-white mb-5">Visiting Hours : </h1>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span>Monday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li className="list-group-item">
                                    <span>Tuesday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li className="list-group-item">
                                    <span>Wednesday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li className="list-group-item">
                                    <span>Thursday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li className="list-group-item">
                                    <span>Friday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li className="list-group-item">
                                    <span>Saturday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li className="list-group-item">
                                    <span>Sunday</span>
                                    <span>8:30AM - 4:30PM</span>
                                </li>
                                <li className="list-group-item">
                                    <span>*Close at every Poya Day</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 text-light wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-6 text-white mb-5">Contact Info : </h1>
                            <table className="table">
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
                                            <p className="mb-2">047 322 0042 / 047 362 0410</p>
                                            <p className="mb-0">ridiyagamasafaripark@gmail.com</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Support </td>
                                        <td>
                                            <p className="mb-2">047 322 0042 / 047 362 0410</p>
                                            <p className="mb-0">ridiyagamasafaripark@gmail.com</p>
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


    );



}

export default VisitinghoursComponent;