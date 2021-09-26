import './ManagementConsole.css';

function ManagementConsole() {

    return (
        <div className="ManagementConsole" class="container-sm">
            <div class="py-5 text-left">
                <h2>Admin Dashboard</h2><br /><br />
                <button type="button" class="btn btn-success me-md-2" href="#">Reset Password</button>
                &nbsp;
                <button type="button" class="btn btn-success" href="#">Employment Schedules</button>
            </div>
            <div class="col-md-7 col-lg-8">
                <h4 class="mb-3">Features</h4>
                <div class="form-check form-switch" >
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Rport Issue
                        <a href="#"><i class="bi-pencil-fill"></i></a>
                    </label>
                </div><br />
                <div class="col-4">
                    <div class="form-check form-switch">
                        <label class="form-check-label" for="flexSwitchCheckChecked"
                        >Request Service <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
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
                </div><br />

            </div>

            <div>
                
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button class="btn btn-success me-md-2" type="button">Save</button>
                    <button class="btn btn-success" type="button">Submit</button>
                </div>

            </div>

        </div>


    )

}

export default ManagementConsole;