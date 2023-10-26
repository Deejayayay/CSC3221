const http = new CoreHttp();

function sendReq(reqType, routeUrl){
    let data; 
    switch (reqType) {
        case "get":
            http.Get(routeUrl)
            .then((data) => {
                processGet(null, data); // Pass data to processGet
            })
            .catch((err) => {
                processGet(err, null); // Pass error to processGet
            });
            break;
        case "post":
            data = { title: "New Post", body: "this is a new post" };

            console.log(data);
            http.Post(routeUrl, data)
                .then((resp) => {
                    processPost(null, resp); // Pass the response to processPost
                })
                .catch((err) => {
                    processPost(err, null); // Pass the error to processPost
                });
            break;
        case "put":
            data = {id: 12, title: 'put data', body: 'data putted'};

            console.log(data);
            http.Put(routeUrl, data)
                .then((resp) => {
                    processPut(null, resp); // Pass the response to processPost
                })
                .catch((err) => {
                    processPut(err, null); // Pass the error to processPost
                });
            break;
        case "delete":
            http.delete(routeUrl)
            .then((resp) => dataDelete(null, resp))
            .catch((err) => dataDelete(err))
            break;
    }
}

//listener to SEND button
document.querySelector("#SendReq").addEventListener("click", async (e) => {
    const selectedRadio = document.querySelector('input[name="HTTPtype"]:checked');
    const reqType = selectedRadio ? selectedRadio.value : null;

    const route = document.querySelector("#route").value;

    if (reqType && route) {
        try {
            // Make the request only if both reqType and route are valid
            const response = await sendReq(reqType, route);
            // Process the response if needed
        } catch (error) {
            console.error('Error:', error);
            // Handle the error, e.g., display an error message to the user
        }
    } else {
        console.error('Validation Error: Please select a request type and enter a route.');
        // Handle the validation error, e.g., display a validation error message to the user
    }
    
    e.preventDefault();
});

function processGet(err, data){
    const responseList = document.getElementById('response');
    responseList.innerHTML = ''; // Clear existing content

    if (err) {
        console.error('Error:', err);
    } else if (Array.isArray(data)) {
        console.log(data);
        data.forEach(data => {
            const list = document.createElement('li');
            list.style.listStyle = 'none';
            list.innerHTML = `Id: ${data.id} <br>Title: ${data.title} <br>Body: ${data.body} <br><br>`;

            responseList.appendChild(list);
        });
    } else {
        console.error('Error: Invalid data format');
    }
}

function processPost(err, data) {
    const responseList = document.getElementById('response');
    responseList.innerHTML = ''; // Clear existing content
    if(err){
        console.error('Error', err)
    }else{
        try {
            const list = document.createElement('li');
            list.style.listStyle = 'none';
            list.innerHTML = `Id: ${data.id} <br>Title: ${data.title} <br>Body: ${data.body} <br><br>`

            responseList.appendChild(list);
        } catch (error) {
            console.error('Error parsing JSON data:', error);
        }
    }
}

function processPut(err, data){
    const responseList = document.getElementById('response');
    responseList.innerHTML = ''; // Clear existing content
    if(err){
        const list = document.createElement('li');
        list.style.listStyle = 'none';
        list.innerHTML = `Error: ${err}`;
        console.error('Error', err)
    }else{
        try {
            const list = document.createElement('li');
            list.style.listStyle = 'none';
            list.innerHTML = `ID: ${data.id} <br> Posted: <br> Title: ${data.title} <br> Body: ${data.body} <br> <br>`; // Access a specific property from the response
            
            responseList.appendChild(list);
        } catch (error) {
            console.error('Error parsing JSON data:', error);
        }
    }
}

function dataDelete(err, data){
    const responseList = document.getElementById('response');
    responseList.innerHTML = ''; // Clear existing content
    if(err){
        const list = document.createElement('li');
        list.style.listStyle = 'none';
        list.innerHTML = `Issue Deleting Post:${err}`;
        console.error('Error', err)
    }else{
        try {
            const list = document.createElement('li');
            list.style.listStyle = 'none';
            list.innerHTML = `Data Deleted`; // Access a specific property from the response
            
            responseList.appendChild(list);
        } catch (error) {
            console.error('Error parsing JSON data:', error);
        }
    }
}