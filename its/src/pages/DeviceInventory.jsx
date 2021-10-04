import { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

import dataDetails from '../mock-data/deviceDetails.json';

function DeviceInventory() {

    const [devices] = useState(dataDetails);
    return (
        <div>
            <h2>Device Inventory</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Device ID</th>
                        <th>Device Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Function</th>

                    </tr>
                </thead>
                <tbody>

                    {devices.map((device) => (
                        <tr>
                            <td>{device.id}</td>
                            <td class="col-md-2">{device.Equipment}</td>
                            <td>{device.Category}</td>
                            <td class="col-md-2">{device.AvailableQuantity}</td>
                            <td>
                                <Button>Edit</Button>
                                <span><Button>Save</Button></span>
                            </td>
                        </tr>
                    ))}

                </tbody>

            </Table>

        </div>
    )


}

export default DeviceInventory;