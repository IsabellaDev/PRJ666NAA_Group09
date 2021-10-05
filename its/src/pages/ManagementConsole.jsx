import { xlink, svg } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

function ManagementConsole() {

    return (
        <div className="managementConsole" class="container">
            <div class="col">
                <div class="py-5 text-left">
                    <h2>Admin Dashboard</h2><br /><br />
                    <button type="button" class="btn btn-primary me-md-2" href="#">Reset Password</button>

                </div>
                <div class="col-md-7 col-lg-8">

                    <div class="container px-4 py-5" id="featured-3">
                        <h2 class="pb-2 border-bottom">Features</h2>
                        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                            <div class="feature col">
                                <div class="feature-icon bg-primary bg-gradient">
                                    <svg class="bi" width="1em" height="1em"><use xlinkhref="#collection" /></svg>
                                </div>
                                <h2>Device Inventory</h2>
                                <p>Click below to check the current status of device inventory details. </p>
                                <Link to="/deviceInventory" class="icon-link">
                                    Go to Inventory
                                    <svg class="bi" width="1em" height="1em"><use xlinkhref="#chevron-right" /></svg>
                                </Link>

                            </div>
                            <div class="feature col">
                                <div class="feature-icon bg-primary bg-gradient">
                                    <svg class="bi" width="1em" height="1em"><use xlinkhref="#people-circle" /></svg>
                                </div>
                                <h2>Articles List</h2>
                                <p>Click below to check the current Troubleshooting articles list, and mangage the list and articles as required.      </p>
                                <Link to="/articleList" class="icon-link">
                                    Go to articles
                                    <svg class="bi" width="1em" height="1em"><use xlinkhref="#chevron-right" /></svg>
                                </Link>
                            </div>

                            <div class="feature col">
                                <div class="feature-icon bg-primary bg-gradient">
                                    <svg class="bi" width="1em" height="1em"><use xlinkhref="#toggles2" /></svg>
                                </div>
                                <h2>Ticket Management</h2>
                                <p>Click below to view all the tickets and manage the tickets as neededs. </p>
                                <Link to="/ticketManagement" class="icon-link">
                                    Go to tickets
                                    <svg class="bi" width="1em" height="1em"><use xlinkhref="#chevron-right" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*<div class="form-check form-switch" >
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Rport Issue
                        <a href="#"><i class="bi-pencil-fill"></i></a>
                    </label>
                </div><br />
                <div class="col-4">
                    <div class="form-check form-switch">
                        <label class="form-check-label" for="flexSwitchCheckChecked"
                        >Request Service <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                            <a href="#"><i class="bi-pencil-fill"></i></a>
                        </label>
                    </div>
                </div><br />

                <div class="col-sm-4">
                    <div class="form-check form-switch">
                        <label class="form-check-label" for="flexSwitchCheckChecked"
                        >Troubleshooting Articles <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                            <a href="#"><i class="bi-pencil-fill"></i></a>
                        </label>
                    </div>
                </div><br />

                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Install Software <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                        <a href="#"><i class="bi-pencil-fill"></i></a>
                    </label>
                </div><br />

                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Contact Information <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                        <a href="#"><i class="bi-pencil-fill"></i></a>
                    </label>
                </div><br />

                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Chat <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" disabled />
                    </label>
                </div><br />

                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Bills <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" disabled />
                    </label>
                </div><br />

                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Default Option <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" disabled />
                    </label>
                </div>*/}

                </div>
            </div>


        </div>


    )

}

export default ManagementConsole;