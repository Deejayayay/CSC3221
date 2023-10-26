class http {

    async Get(url){ 
        fetch(url)
            .then(response => {
                if(response.ok){
                    return response.json();
                } else {
                    throw new Error('failed to fetch JSON');
                }
            })
    }

}