import React from 'react'; 

const url = "https://jsonplaceholder.typicode.com/users/1";
function FetchWay() {
    const [userData, setUserData] = React.useState({});
    React.useEffect(()=>{
      fetch(url).then(response => response.json()).then(actualData => setUserData(actualData)).catch(error => console.log(error))
    },[])
    // No need to touch code below
    return (
      <div className="App">
        <h2>User Data</h2>
        <p>
          <strong>Name: </strong>{" "}
          {userData.name || "(Need to populate name here)"}
        </p>
        <p>
          <strong>Website: </strong>
          {userData.website || "(Need to populate website here)"}
        </p>
        <p>
          <strong>Email: </strong>
          {userData.email || "(Need to populate email here)"}
        </p>
        <p>
          <strong>Phone: </strong>
          {userData.phone || "(Need to populate phone here)"}
        </p>
      </div>
    );
  }

  export default FetchWay;