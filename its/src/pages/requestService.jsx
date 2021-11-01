import React, { useState, useEffect } from 'react';
import '../components/requestService.css';
import data from '../mock-data/mock-data.json';
import 'bootstrap/dist/css/bootstrap.css';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import Axios from 'axios';

require("es6-promise").polyfill();
require("isomorphic-fetch");

    function RequestService() {
        const url = "https://damp-river-45159.herokuapp.com/requestService"
        const[devices, setDevices] = useState([]);

        useEffect(() => {
            fetch("http://localhost:5000/hardware")
            .then(response => response.json())
            .then(json => setDevices(json))
        }, [])
            
        const[renter, setRenter]  = useState({
            requestingPerson: "",
            id: "",
            equipment: "",
            duration: "",
            program: "",
            campus: ""
        })

        const resetForm = () => {
            setRenter({
                requestingPerson: "",
                id: "",
                equipment: "",
                duration: "",
                program: "",
                campus: ""
            })
        }
        
        var submit = ((e)=>{
            e.preventDefault();
            Axios.post(url,{
                requestingPerson: renter.requestingPerson,
                id: renter.id,
                equipment: renter.equipment,
                duration: renter.duration,
                program: renter.program,
                campus: renter.campus
            })
            .then(res=>{
                console.log(res.renter)
                resetForm()
                alert("Congratulations! You have successfully been registered to obtain the equipment you have selected!");
            })
        })
        
        var handle = ((e) => {
            const newRenter={...renter}
            newRenter[e.target.id] = e.target.value
            setRenter(newRenter)
            console.log(newRenter)
        })
        
        const Equipment = ({ data }) => {
            const [selected, setSelected] = React.useState(data[0].equipment[0]);
            const [selectedEquipment, setSelectedEquipment] = React.useState(data);

            React.useEffect(() => {
                const singleEquipment = data.filter((item) => item.equipment[0] === selected);

                setSelectedEquipment(singleEquipment);
            }, [data, selected]);

            const handleSelect = (e) => {
                setSelected(e.target.value);
            };
        }
            return (
                <div className="requestService">
        
                    <h1>Request Service</h1>
        
                    <div className="requestServiceTable">
                     <table devices={devices} className="table table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Equipment</th>
                                <th>Available Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {devices.map((device) => (
                                <tr>
                                    <td><FaIcons.FaLaptop /></td> 
                                    <td>{device.equipmentName}</td>
                                    <td>{device.quantity}</td>
                                </tr> 
                            ))}  
                        </tbody>
                    </table> 
                    </div>
        
                    <div>                
                        <form onSubmit={(e)=> submit(e)} className="requestServiceForm">
                            <label className="label">Requesting Person</label>
                            <input onChange={(e)=>handle(e)} id="requestingPerson" type="text" name="requestingPerson" placeholder="John Smith" />
        
                            <label className="label">ID</label> 
                            <input onChange={(e)=>handle(e)} id="id" type="text" name="id" placeholder="1664836548" />
        
                            <label className="label">Equipment</label> 
                            <select onChange={(e)=>handle(e)} id="equipment" name="equipment">
                                <option>     </option>
                                <option>
                                {devices.map((device) => (
                                    device.equipmentName 
                                ))} 
                                </option><br />
                            </select>
        
                            <label className="label">Duration</label> 
                            <select onChange={(e)=>handle(e)} id="duration" name="duration">
                                <option>      </option>
                                <option>placeholder</option>
                                <option>placeholder</option>
                            </select>
        
                            <label className="label">Program</label> 
                            <select onChange={(e)=>handle(e)} id="program" name="program">
                                <option>       </option>
                                <option>CPA</option>
                                <option>CPP</option>
                            </select>
        
                            <label className="label">Campus</label> 
                            <select onChange={(e)=>handle(e)} id="campus" name="campus">
                                <option>       </option>
                                <option>Newnham</option>
                                <option>Seneca@York</option>
                                <option>Markham</option>
                                <option>King</option>
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