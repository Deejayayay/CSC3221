const url = "https://jsonplaceholder.typicode.com/posts"
class Core {
    //constructor for the url 
        //currently hardcoded but need to make it dynamic later
    constructor(url) {
        this.url = url;
    }
    
    async Get(url) { 
        fetch(url)
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error('failed to fetch JSON');
                }
            })

            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error: ', error);
            });


        // //Fix Request Options
        // const requestOptions = {
        //     method: "GET",
        //     //has to be the correct content type 'application/json'
        //     headers: {"Content-Type": 'application/json'},
        //     //use stringify in post 
        //     //body: JSON.stringify(url)
        // }
        // const response = await fetch(url , requestOptions);
        // console.log(response);
        // if(response.ok) {
        //     const posts = await response.json();
        //     return posts;
        // } else {
        //     const err = response.status();
        //     return err;
        // }
    }

    //post
    async Post(){

    }
    //put

    //delete
}

