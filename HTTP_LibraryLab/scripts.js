let http = new Core;

function processGet(){
    data = Core.get;
    let output; 
    
    const posts = JSON.parse(data);
    output = "<ul style=\"list-style:none\">";
    for(let post of posts){
        output += `<li>ID: ${post.id} \n Title: ${post.title} \n Body: ${post.body}</li>`
    }
    output += "</ul>";

    document.querySelector("#response").innerHTML = output;

}
