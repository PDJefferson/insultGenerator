//headers to set the type of content been fetched to
//a json format and only accept said content
let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

export async function fetchInsult(index) {
  //gets the response from the api
  const fetchData = async () => {
    //sends a request to fetch the data from evil insults and 
    //redirects the request to the client with the data taken from the api, that way 
    //we don't have to deal with cors policies without having a server
    //the data to the client
    const response = await fetch(
      `https://fast-dawn-89938.herokuapp.com/https://evilinsult.com/generate_insult.php?type=json&lang=en&number=${index}`,
      {
        mode: "cors",
        method: "GET",
        headers: headers,
      }
    );
    //if there is an error throw it with the message
    if (!response.ok) {
      console.log(response);
      throw new Error(response);
    }
    return response.json();
  };

  //get the data from the response and returns unless an error is found
  try {
    
    const data = await fetchData();
    
    return data;
  } catch (error) {
    console.log(error);
    console.error("the error is the following: ", error);
    return;
  }
}
