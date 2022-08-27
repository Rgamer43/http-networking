async function GetResponse() {
    const response: Response = await fetch('http://localhost', {
      method: 'GET',
      headers: {
        Accept: '*'
      }
    });
  
    if(!response.ok) throw new Error("Error! " + response.status);
  
    console.log(response.body);
}

GetResponse();