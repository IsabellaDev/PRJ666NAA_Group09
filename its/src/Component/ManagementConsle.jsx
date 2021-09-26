
function ManagementConsole() {

    return (
        <div className="ManagementConsole">
            <div class="container-sm">
                <h4>Admin Dashboard</h4>
                <button type="button" class="btn btn-success" href="#">Reset Password</button>
                &nbsp;
                <button type="button" class="btn btn-success" href="#">Employment Schedules</button>
            </div>
            <div>
                <h4>Features</h4>
                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Rport Issue 
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                    <a href="#"><i class="bi-pencil-fill"></i></a>
                    </label>
                </div>

                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Request Service <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                    <a href="#"><span class="glyphicon glyphicon-pencil"></span></a>                    
                    <a href="#"><i class="bi-pencil-fill"></i></a>
                    </label>
                </div>

                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Troubleshooting Articles <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                    <a href="#"><i class="bi-pencil-fill"></i></a>
                    </label>
                </div>                

                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Install Software <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                    <a href="#"><i class="bi-pencil-fill"></i></a>
                    </label>
                </div>

                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Contact Information <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                    <a href="#"><i class="bi-pencil-fill"></i></a>
                    </label>
                </div>

                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Chat <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" disabled />
                    </label>
                </div>

                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Bills <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" disabled />
                    </label>
                </div>

                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Default Option <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" disabled />
                    </label>
                </div>

            </div>

            <div>
                <button type="button" class="btn btn-success" href="#">Save</button>
                &nbsp;
                <button type="button" class="btn btn-success" href="#">Submit</button>
            </div>

        </div>

        
    )

}

export default ManagementConsole;