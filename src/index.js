fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(data => {
        for (let ramen of data) {
            appendImage(ramen);
        }
    })

function appendImage(ramenObject) {
    let ramenContainer = document.querySelector("#ramen-menu");
    
    let image = document.createElement("img");
    image.src = ramenObject.image;

    ramenContainer.append(image);
    
    image.addEventListener("click", function() {
        renderDetails(ramenObject);
    });
}

function renderDetails(ramenObject) {
    let image = document.querySelector(".detail-image");
    image.src = ramenObject.image;

    let name = document.querySelector(".name");
    name.textContent = ramenObject.name;

    let restaurant = document.querySelector(".restaurant");
    restaurant.textContent = ramenObject.restaurant;

    let rating = document.querySelector("#rating-display");
    rating.textContent = ramenObject.rating;

    let comment = document.querySelector("#comment-display");
    comment.textContent = ramenObject.comment;
}

let form = document.querySelector("#new-ramen");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault()
    let newName = e.target["name"].value;
    let newRestaurant = e.target["restaurant"].value;
    let newImage = e.target["image"].value;
    let newRating = e.target["rating"].value;
    let newComment = e.target["new-comment"].value;


    let newRamen = {
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment
    };

    appendImage(newRamen);
    form.reset();
}