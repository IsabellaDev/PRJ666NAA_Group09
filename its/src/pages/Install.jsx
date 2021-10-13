import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Install() {
    return (
        <div className='install' >
            <form>
                <div class="py-5 text-left">

                    <h2>Install Software</h2>
                    <p class="lead">Follow the prompts below to install the necessary software to allow remote assistance. </p>
                </div>
                <div>
                    <h4>Select your operating system. </h4>
                    <hr class="my-4" />
                    <h4 class="mb-3">Operating System</h4>

                    <div class="my-3">
                        <div class="form-check">
                            <input id="windows10" name="operatingSystem" type="radio" class="form-check-input" checked required />
                            <label class="form-check-label" for="windows10">Windows 10</label>
                        </div>

                        <div class="form-check">
                            <input id="MacOS" name="operatingSystem" type="radio" class="form-check-input" checked required />
                            <label class="form-check-label" for="MacOS">MacOS</label>
                        </div>

                        <div class="form-check">
                            <input id="LinuxUbuntu" name="operatingSystem" type="radio" class="form-check-input" checked required />
                            <label class="form-check-label" for="LinuxUbuntu">Linux Ubuntu</label>
                        </div>

                        <div class="form-check">
                            <input id="Windows7" name="operatingSystem" type="radio" class="form-check-input" checked required />
                            <label class="form-check-label" for="windows7">Windows 7</label>
                        </div>

                        <div class="form-check">
                            <input id="Other" name="operatingSystem" type="radio" class="form-check-input" checked required />
                            <label class="form-check-label" for="Other">Other</label>
                        </div>

                    </div>

                    <div class="my-3">

                        <hr class="my-4" />
                        <p class="lead">Fill the following information about your device. If you are unsure, right-click on the Start Menu and click on "System". </p>

                        <div class="col-12">
                            <label for="deviceName" class="form-label">Device Name</label>
                            <input type="text" class="form-control" id="deviceName" placeholder="Macbook Air" required />
                            <div class="invalid-feedback">
                                Please enter your device name.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="processor" class="form-label">Processor</label>
                            <input type="text" class="form-control" id="processor" placeholder="" required />
                            <div class="invalid-feedback">
                                Please enter the processor.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="installedRAM" class="form-label">Installed RAM</label>
                            <input type="text" class="form-control" id="installedRAM" placeholder="" required />
                            <div class="invalid-feedback">
                                Please enter the installed RAM.
                            </div>
                        </div>

                        <div class="col-12">
                            <label for="systemType" class="form-label">System Type</label>
                            <input type="text" class="form-control" id="systemType" placeholder="" required />
                            <div class="invalid-feedback">
                                Please enter the System Type.
                            </div>
                        </div>

                    </div>

                    <div className="mb-2">

                            <Button variant="primary" size="lg" type="submit">
                                Next
                            </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Install;