import React, { useState } from 'react';
import '../components/requestService.css';
import data from '../mock-data/mock-data.json';
import 'bootstrap/dist/css/bootstrap.css';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'

function RequestService() {
const[devices, setDevices] = useState(data);

    return (
        <div className="requestService">
            <h1>Request Service</h1>

            <div className="requestServiceTable">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th class="col-md-1"></th>
                        <th class="col-md-2">Equipment</th>
                        <th class="col-md-2">Available Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device) => (
                        <tr>
                            <td class="col-md-1"><FaIcons.FaLaptop /></td>
                            <td class="col-md-1">{device.Equipment}</td>
                            <td class="col-md-1">{device.AvailableQuantity}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            </div>

            <div>                
                <form className="requestServiceForm">
                    <label className="label">Requesting Person</label>
                    <input type="text" placeholder="John Smith" />

                    <label className="label">ID</label> 
                    <input type="text" placeholder="1664836548" />

                    <label className="label">Equipment</label> 
                    <select>
                        <option>     </option>
                        <option>placeholder</option>
                        <option>placeholder</option>
                    </select>

                    <label className="label">Duration</label> 
                    <select>
                        <option>      </option>
                        <option>placeholder</option>
                        <option>placeholder</option>
                    </select>

                    <label className="label">Program</label> 
                    <select>
                        <option>       </option>
                        <option>placeholder</option>
                        <option>placeholder</option>
                    </select>

                    <label className="label">Campus</label> 
                    <select>
                        <option>       </option>
                        <option>placeholder</option>
                        <option>placeholder</option>
                    </select>

                    <div class="btns">
                        <button type="submit" class="btn btn-space btn-success">Submit</button>
                        <button type="reset" class="btn btn-space btn-success">Clear</button>
                    </div>
                </form>          
            </div>
            
        </div>
    );
}

export default RequestService;