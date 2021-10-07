import { Link } from 'react-router-dom';

function PasswordReset() {

    return (

        <div className="passwordReset">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10">
                    <div class="forgot">
                        <h2>Need to reset your password?</h2>
                        <hr />
                        <div class="card mt-4">
                            <div class="card-body">

                                <label>Current Password</label>
                                <div class="form-group pass_show">
                                    <input type="password" value="faisalkhan@123" class="form-control" placeholder="Current Password" />
                                </div>
                                <label>New Password</label>
                                <div class="form-group pass_show">
                                    <input type="password" value="faisal.khan@123" class="form-control" placeholder="New Password" />
                                </div>
                                <label>Confirm Password</label>
                                <div class="form-group pass_show">
                                    <input type="password" value="faisal.khan@123" class="form-control" placeholder="Confirm Password" />
                                </div>
                                <div class="card-footer"> <button class="btn btn-primary" type="submit">Save New Password</button> <Link to="logIn"><button class="btn btn-danger" type="submit">Back to Login</button></Link> </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset;