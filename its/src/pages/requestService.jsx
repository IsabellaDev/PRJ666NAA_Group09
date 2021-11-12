import React, { useState, useEffect } from 'react';
import '../components/requestService.css';
import data from '../mock-data/mock-data.json';
import 'bootstrap/dist/css/bootstrap.css';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import Axios from 'axios';
import axios from 'axios';

require("es6-promise").polyfill();
require("isomorphic-fetch");

    function RequestService() {
       //const url = "https://damp-river-45159.herokuapp.com/requestService"
        const url = "http://localhost:5000/requestService"
        const[devices, setDevices] = useState([]);

        useEffect(() => {
            //fetch("https://damp-river-45159.herokuapp.com/hardware")
            fetch("http://localhost:5000/hardware")
            .then(response => response.json())
            .then(json => setDevices(json))
        }, [])

        const clearFields = (event) => {
            Array.from(event.target).forEach((e) => (e.value = ""));
        }
       
        function decreaseQuantity (idevicenm)  {
            let devArray=devices.map(D=>D);
            let devSelect;
            for(let i=0;i<devArray.length;i++){
                if(devArray[i].equipmentName===idevicenm){
                    devSelect= devArray[i];
                    break

                    
                }
            
            }
             return devSelect
        }

        // const getEquipmentId = () =>{
        //     useEffect(() => {
        //         axios.get(`https://damp-river-45159.herokuapp.com/hardware/${devices.id}`)
        //         .then(res => {
        //             setDevices(res.data)
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        //     }, [devices.id]);
        // }
            
        const[renter, setRenter]  = useState({
            requestingPerson: "",
            id: "",
            equipment: "",
           // duration: "",
           // program: "",
            campus: ""
        })
        
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
                clearFields(e);
                let seleDevice= decreaseQuantity(renter.equipment);
                console.log(renter.equipment)
                let qty=--seleDevice.quantity;
                const decQuantity = {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json' },
                    body:JSON.stringify({
                        quantity : qty
                      })
                };
                console.log(seleDevice)
                fetch(`http://localhost:5000/hardware/${seleDevice._id}`, decQuantity)
                alert("Congratulations! You have successfully been registered to obtain the equipment you have selected!");
            })
            .then(()=>{
                window.location.reload(false);
            })
        })
        
        var handle = ((e) => {
            const newRenter={...renter}
            newRenter[e.target.id] = e.target.value
            setRenter(newRenter)
            console.log(newRenter)
        })
        
        const Equipment = ({ data }) => {
             const [selected, setSelected] = useState([]);
            const [selectedEquipment, setSelectedEquipment] = useState(devices);

            useEffect(() => {
                {devices.map((device) => (

                //data.filter((devices) => devices.equipmentName === selected);
                
                setSelected(device.quantity - 1)
                //selectedEquipment.quantity - 1
                ))}
            }, [data, devices]);
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
                            <input onChange={(e)=>handle(e)} required id="requestingPerson" type="text" name="requestingPerson" placeholder="John Smith" />
        
                            <label className="label">ID</label> 
                            <input onChange={(e)=>handle(e)} required id="id" type="text" name="id" placeholder="1664836548" />
        
                            <label className="label">Equipment</label> 
                            
                            <select onChange={(e)=>handle(e)} required id="equipment" name="equipment">
                                <option> </option>
                            {devices.map((device) => (
                                <option>{device.equipmentName}</option>
                            ))}
                            </select>
                            
                            {/* <label className="label">Duration</label> 
                            <select onChange={(e)=>handle(e)} id="duration" name="duration">
                                <option>      </option>
                                <option>placeholder</option>
                                <option>placeholder</option>
                            </select> */}
         
                            {/* <label className="label">Program</label> 
                            <select onChange={(e)=>handle(e)} id="program" name="program">
                                <option>       </option>
                                <option>CPA</option>
                                <option>CPP</option>
                            </select> */}
        
                            <label className="label">Campus</label> 
                            <select onChange={(e)=>handle(e)} required id="campus" name="campus">
                                <option>       </option>
                                <option>Newnham</option>
                                <option>Seneca@York</option>
                                <option>Markham</option>
                                <option>King</option>
                            </select>
        
                            <div class="btns">
                                <button onSubmit={(e)=>submit(e)} type="submit" class="btn btn-space btn-success">Submit</button>
                                <button type="reset" class="btn btn-space btn-success">Clear</button>
                            </div>
                        </form>          
                    </div> 
                </div>
            );
        }

export default RequestService;