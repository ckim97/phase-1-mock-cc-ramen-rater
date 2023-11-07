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

                   let name = document.querySelector(".name");
                   name.textContent = ramen.name;

                   let restaurant = document.querySelector(".restaurant");
                   restaurant.textContent = ramen.restaurant;

                    let rating = document.getElementById("rating-display");
                    rating.textContent = ramen.rating;

                    let comment = document.getElementById("comment-display");
                    comment.textContent = ramen.comment;

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



document.addEventListener("DOMContentLoaded", function(){
    let restaurants = [];
    fetch("http://localhost:3000/ramens")
        .then(response => response.json())
        .then(data => function(){
            for (let ramen of data) {
                restaurants.push(ramen);
            }
            let detailedImage = document.querySelector(".detail-image");
            detailedImage.src = restaurants[0].image;

            let name = document.querySelector(".name");
            name.textContent = restaurants[0].name;

            let restaurant = document.querySelector(".restaurant");
            restaurant.textContent = restaurants[0].restaurant;
        })
})