// Initialize and add the map
function initMap() {
    // The location of Uluru
    var russia = { lat: 3.51602, lng: -2.1969 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 20, center: russia });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: russia, map: map });
}


// toggle menu
var MenuItems = document.getElementById("menu-items");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0"){
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}
let cartCount = 0;
let cartTotal = 0;

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const productName = button.dataset.name;
    const productPrice = parseFloat(button.dataset.price);

    cartCount++;
    cartTotal += productPrice;

    alert(
      productName + " added to cart!\n" +
      "Items: " + cartCount + "\n" +
      "Total: ₹" + cartTotal.toFixed(2)
    );
  });
});
