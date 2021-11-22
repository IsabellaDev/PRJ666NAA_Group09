export default function SearchResults({ results }) {
    if (!results) {
        return null;
    }
    if (results.length === 0){
        return <p>No results.</p>
    }
    return (
        <div className="home">
          <div class="container">
            <div class="row align-items-center my-5">
              <div class="col-lg-7">
              </div>
              <div class="col-lg-5">
                
    
                <table className="table table-striped ticketTable">
                  <thead>
                    <tr>
                      <th class="col-md-4">Ticket number</th>
                      <th class="col-md-4">Requested by</th>
                      <th class="col-md-4">Ticket subject</th>
                      <th class="col-md-4">Short description</th>
                      <th class="col-md-4">Created on</th>
                      <th class="col-md-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((ticket)=> (
                      <tr>
                        <th class="col-md-3">{ticket.ticketNumber}</th>
                        <td class="col-md-3">{ticket.firstName} {ticket.lastName}</td>
                        <td class="col-md-2">{ticket.subject}</td> 
                        <td class="col-md-3">{ticket.description}</td>
                        <td class="col-md-3">{ticket.createOn}</td>
                        <td class="col-md-3">{ticket.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
}