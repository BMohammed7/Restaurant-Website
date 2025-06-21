// Array of random customer reviews 
const comments = [
    "The pizza here is fantastic! Thin crust and delicious toppings. Will definitely be back! - Lorelei Holloway",
    "I had the spaghetti carbonara, and it was out of this world. Authentic and creamy. - Blaire Harvey",
    "The atmosphere is so cozy, and the staff are friendly. A perfect place for date night! - Taylor West",
    "Amazing tiramisu! Best I've ever had. The coffee flavor is just perfect. - Cayden Greene",
    "The lasagna was good, but the garlic bread was absolutely incredible!  - Cynthia Cherry",
    "I love the wine selection here, and the pasta dishes are always cooked to perfection. - Selena Frazier" ,
    "I had the margherita pizza, and it was just like being in Italy. So fresh and tasty!  - Rome Giles",
    "Service was a bit slow, but the food was worth the wait. The pesto pasta was excellent.  - Callum Newman",
    "The bruschetta appetizer was so fresh and flavorful. I could eat it every day!  - Bailee Armstrong",
    "A hidden gem! The ravioli and the creamy sauce were exceptional. I highly recommend it. - Grant Glenn"
];

function showRandomComment() {
    // Get a random index from the comments array
    const randomIndex = Math.floor(Math.random() * comments.length);
    
    // Display the random comment inside the div
    const commentDiv = document.getElementById('random-comment');
    commentDiv.innerHTML = `"${comments[randomIndex]}"`;
}

// Call the function immediately to show the first comment
showRandomComment();

// Set an interval to change the comment every 5 seconds (5000 milliseconds)
setInterval(showRandomComment, 5000);
