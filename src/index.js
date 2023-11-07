// write your code here
document.addEventListener("DOMContentLoaded", function(){
    fetch("http://localhost:3000/ramens")
        .then(response => response.json())
        .then(data => {
            let ramenContainer = document.getElementById("ramen-menu");
            for (let ramen of data) {
                let image = document.createElement("img");
                image.src = ramen.image;
                image.addEventListener("click", function(){
                    let detailedImage = document.querySelector(".detail-image");
                    detailedImage.src = ramen.image;

                   let name = document.querySelector("h2");
                   name.textContent = ramen.name;

                   let restaurant = document.querySelector(".restaurant");
                   restaurant.textContent = ramen.restaurant;
                });
            ramenContainer.append(image);
            };
        });
    
    
})

let formSubmission = document.getElementById("new-ramen");
formSubmission.addEventListener("submit", function(e){
    e.preventDefault();
    let ramenContainer = document.getElementById("ramen-menu");
    let newImage = document.createElement("img");
    newImage.src = e.target.image.value;

    ramenContainer.append(newImage);

    formSubmission.reset();
})


