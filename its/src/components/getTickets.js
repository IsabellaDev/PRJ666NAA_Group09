export const search = async (query) => {
    const apiUrl = `http://localhost:5000/ticket?ticketNumber=${query}`;
    const res = await fetch(apiUrl);
    if (!res.ok) {
        throw new Error(`error loading search results (${res.status})`);
    }
    return res.json();
}