class Core {
    // constructor(URL) {
    //     this.URL = URL;
    // }

    async Get(url) { 
        //Fix Request Options
        const requestOptions = {
            method: "GET",
            //has to be the correct content type 'application/json'
            headers: {"Content-Type": 'application/json'},
            //use stringify in post 
            //body: JSON.stringify(url)
        }
        const response = await fetch(url , requestOptions);
        console.log(response);
        if(response.ok) {
            const posts = await response.json();
            return posts;
        } else {
            const err = response.status();
            return err;
        }
    }

    //post
    async Post(){

    }
    //put

    //delete
}

