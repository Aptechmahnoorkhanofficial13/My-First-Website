// Explore Collection Button

document.getElementById("exploreBtn").onclick = function() {
    document.getElementById("products").scrollIntoView();
};

//Visitor Counter

let count = localStorage.getItem("visitors") || 0;

count++;

localStorage.setItem("visitors", count);

document.getElementById("visitorCount").innerHTML = count;

// Dark Mode

document.getElementById("darkModeBtn").onclick = function() {
    document.body.classList.toggle("dark-mode");
};

//Products

// Add to Cart Message

function addToCart() {

    let message = document.getElementById("cartMessage");

    message.classList.add("show");

    setTimeout(function() {
        message.classList.remove("show");
    }, 3000);

}

// Store Location

function viewLocation(location) {

    window.open("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(location));

}

/* ===================================================================
   NEW CODE ADDED FOR SRS REQUIREMENTS
   (everything above this line is the original code)
   =================================================================== */


// ------------------------------------------------------------------
// Watch Data
// All watch details are stored in this list (array).
// The "name" must be the same as the heading (h3) of the product card.
// ------------------------------------------------------------------

let watches = [
    {
        name: "Men Formal",
        category: "Luxury",
        price: 9500,
        image: "menformal.png",
        description: "A bold black dial chronograph with golden accents. Made for men who like a sharp and formal look at the office or at a dinner.",
        specs: [
            "Movement: Quartz Chronograph",
            "Case: Stainless Steel",
            "Strap: Black and Gold Steel Bracelet",
            "Water Resistance: 50 meters",
            "Warranty: 1 Year"
        ]
    },
    {
        name: "Female Fancy",
        category: "Fashion",
        price: 2000,
        image: "femalefancy.png",
        description: "A light and sparkling rose gold watch with a pearl white dial and crystal bezel. A perfect gift for any occasion.",
        specs: [
            "Movement: Quartz",
            "Case: Rose Gold Plated",
            "Strap: Crystal Studded Bracelet",
            "Water Resistance: 30 meters",
            "Warranty: 6 Months"
        ]
    },
    {
        name: "Couple Watch",
        category: "Fashion",
        price: 7900,
        image: "couple.png",
        description: "A matching set for him and her with a deep green dial and a two tone bracelet. Comes in a gift box.",
        specs: [
            "Movement: Quartz",
            "Case: Stainless Steel",
            "Strap: Silver and Gold Bracelet",
            "Water Resistance: 30 meters",
            "Set: 2 Watches (His and Hers)"
        ]
    },
    {
        name: "Classic Watch",
        category: "Vintage",
        price: 4500,
        image: "classic.png",
        description: "A traditional watch with roman numerals and a black leather strap. Simple, calm and always in style.",
        specs: [
            "Movement: Automatic",
            "Case: Gold Plated Steel",
            "Strap: Black Leather",
            "Water Resistance: 30 meters",
            "Warranty: 1 Year"
        ]
    },
    {
        name: "Luxury Watch",
        category: "Luxury",
        price: 12000,
        image: "luxury.png",
        description: "A skeleton dial watch set with sparkling stones. You can see the machine working inside the watch.",
        specs: [
            "Movement: Automatic Skeleton",
            "Case: Stainless Steel with Stones",
            "Strap: Studded Steel Bracelet",
            "Water Resistance: 50 meters",
            "Warranty: 2 Years"
        ]
    },
    {
        name: "Smart Watch",
        category: "Smart Watches",
        price: 4500,
        image: "smart.png",
        description: "A modern smart watch with a bright square display. Check your messages, steps and heart rate from your wrist.",
        specs: [
            "Display: 1.9 inch Touch Screen",
            "Battery: Up to 5 days",
            "Strap: Soft Black Silicone",
            "Features: Heart Rate, Steps, Notifications",
            "Warranty: 1 Year"
        ]
    },
    {
        name: "Gold Watch",
        category: "Luxury",
        price: 90500,
        image: "gold.png",
        description: "Our most precious piece. A golden dial with a diamond set bezel and a full gold bracelet.",
        specs: [
            "Movement: Automatic",
            "Case: Solid Gold Finish",
            "Strap: Gold Bracelet with Diamonds",
            "Water Resistance: 100 meters",
            "Warranty: 5 Years"
        ]
    },
    {
        name: "Silver Watch",
        category: "Vintage",
        price: 19300,
        image: "silver.png",
        description: "A clean silver watch with roman numerals and a date window. A timeless design that never goes out of fashion.",
        specs: [
            "Movement: Automatic",
            "Case: Polished Stainless Steel",
            "Strap: Silver Steel Bracelet",
            "Water Resistance: 50 meters",
            "Warranty: 2 Years"
        ]
    }
];


// Find a watch in the list by its name

function findWatch(name) {

    for (let i = 0; i < watches.length; i++) {
        if (watches[i].name == name) {
            return watches[i];
        }
    }

    return null;
}

// Show price like: Rs. 9,500

function formatPrice(price) {
    return "Rs. " + price.toLocaleString("en-US");
}


// ------------------------------------------------------------------
// Product Line-up (click a button and only that line-up is shown)
// ------------------------------------------------------------------

let filterButtons = document.getElementsByClassName("filter-btn");
let productCards = document.querySelectorAll("#products .card");

function showCategory(category) {

    let total = 0;

    for (let i = 0; i < productCards.length; i++) {

        let name = productCards[i].querySelector("h3").innerText;
        let watch = findWatch(name);

        if (category == "All" || (watch != null && watch.category == category)) {
            productCards[i].classList.remove("hidden-card");
            total++;
        } else {
            productCards[i].classList.add("hidden-card");
        }
    }

    // Message below the buttons
    let info = document.getElementById("filterInfo");

    if (category == "All") {
        info.innerText = "Showing all " + total + " watches. Click on any watch to see its details.";
    } else {
        info.innerText = "Showing " + total + " watch(es) in " + category + ". Click on any watch to see its details.";
    }
}

for (let i = 0; i < filterButtons.length; i++) {

    filterButtons[i].onclick = function() {

        // remove the active color from all buttons
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
        }

        // give it to the button that was clicked
        this.classList.add("active");

        showCategory(this.getAttribute("data-category"));
    };
}

showCategory("All");


// ------------------------------------------------------------------
// Watch Details Popup
// ------------------------------------------------------------------

function openPopup(watch) {

    if (watch == null) {
        return;
    }

    document.getElementById("popupImg").src = watch.image;
    document.getElementById("popupImg").alt = watch.name;
    document.getElementById("popupName").innerText = watch.name;
    document.getElementById("popupCategory").innerText = watch.category + " Line-up";
    document.getElementById("popupPrice").innerText = formatPrice(watch.price);
    document.getElementById("popupDesc").innerText = watch.description;

    // make the list of specifications
    let specsHtml = "";

    for (let i = 0; i < watch.specs.length; i++) {
        specsHtml = specsHtml + "<li>" + watch.specs[i] + "</li>";
    }

    document.getElementById("popupSpecs").innerHTML = specsHtml;

    document.getElementById("popup").classList.add("show");
}

function closePopup() {
    document.getElementById("popup").classList.remove("show");
}

// Open the popup when a product card is clicked

for (let i = 0; i < productCards.length; i++) {

    productCards[i].style.cursor = "pointer";

    productCards[i].onclick = function(event) {

        // if the Add to Cart button was clicked, do not open the popup
        if (event.target.tagName == "BUTTON") {
            return;
        }

        let name = this.querySelector("h3").innerText;
        openPopup(findWatch(name));
    };
}

// Close the popup with the X button or by clicking on the dark area

document.getElementById("popupClose").onclick = closePopup;

document.getElementById("popup").onclick = function(event) {
    if (event.target == this) {
        closePopup();
    }
};


// ------------------------------------------------------------------
// Price List (table is made from the watches list)
// ------------------------------------------------------------------

function viewWatch(index) {
    openPopup(watches[index]);
}

let rows = "";

for (let i = 0; i < watches.length; i++) {

    rows = rows + "<tr>";
    rows = rows + "<td>" + (i + 1) + "</td>";
    rows = rows + "<td>" + watches[i].name + "</td>";
    rows = rows + "<td>" + watches[i].category + "</td>";
    rows = rows + "<td>" + formatPrice(watches[i].price) + "</td>";
    rows = rows + "<td><button class='view-btn' onclick='viewWatch(" + i + ")'>View</button></td>";
    rows = rows + "</tr>";
}

document.getElementById("priceBody").innerHTML = rows;


// ------------------------------------------------------------------
// Gallery (click an image to enlarge it)
// ------------------------------------------------------------------

let galleryImages = document.querySelectorAll(".gallery-grid img");
let galleryIndex = 0;

function showGalleryImage(index) {

    // go back to the first / last image when we reach the end
    if (index < 0) {
        index = galleryImages.length - 1;
    }
    if (index >= galleryImages.length) {
        index = 0;
    }

    galleryIndex = index;

    document.getElementById("lightboxImg").src = galleryImages[index].src;
    document.getElementById("lightboxCaption").innerText = galleryImages[index].alt;
    document.getElementById("lightbox").classList.add("show");
}

function closeGallery() {
    document.getElementById("lightbox").classList.remove("show");
}

for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].onclick = function() {
        showGalleryImage(i);
    };
}

document.getElementById("nextBtn").onclick = function() {
    showGalleryImage(galleryIndex + 1);
};

document.getElementById("prevBtn").onclick = function() {
    showGalleryImage(galleryIndex - 1);
};

document.getElementById("lightboxClose").onclick = closeGallery;

document.getElementById("lightbox").onclick = function(event) {
    if (event.target == this) {
        closeGallery();
    }
};

// Keyboard: Esc closes, arrow keys change the gallery image

document.onkeydown = function(event) {

    if (event.key == "Escape") {
        closePopup();
        closeGallery();
    }

    if (document.getElementById("lightbox").classList.contains("show")) {
        if (event.key == "ArrowRight") {
            showGalleryImage(galleryIndex + 1);
        }
        if (event.key == "ArrowLeft") {
            showGalleryImage(galleryIndex - 1);
        }
    }
};


// ------------------------------------------------------------------
// Menu: color after click, fade effect and mobile menu button
// ------------------------------------------------------------------

let menuLinks = document.querySelectorAll(".menu-links a");

for (let i = 0; i < menuLinks.length; i++) {

    menuLinks[i].onclick = function() {

        // 1) the clicked menu gets a color (the others lose it)
        for (let j = 0; j < menuLinks.length; j++) {
            menuLinks[j].classList.remove("active");
        }
        this.classList.add("active");

        // 2) the section we are going to fades in
        let sectionId = this.getAttribute("href").substring(1);
        let section = document.getElementById(sectionId);

        section.classList.add("section-fade");

        setTimeout(function() {
            section.classList.remove("section-fade");
        }, 1000);

        // 3) on mobile, the menu fades out after a click
        document.getElementById("menuLinks").classList.remove("show");
    };
}

// Menu button (mobile): the menu fades in and out

document.getElementById("menuBtn").onclick = function() {
    document.getElementById("menuLinks").classList.toggle("show");
};


// ------------------------------------------------------------------
// Ticker: current date, time and location
// ------------------------------------------------------------------

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// 5 becomes 05
function addZero(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}

function updateClock() {

    let now = new Date();

    let dateText = dayNames[now.getDay()] + ", " + now.getDate() + " " + monthNames[now.getMonth()] + " " + now.getFullYear();

    // change 24 hour time to 12 hour time
    let hours = now.getHours();
    let ampm = "AM";

    if (hours >= 12) {
        ampm = "PM";
    }

    hours = hours % 12;

    if (hours == 0) {
        hours = 12;
    }

    let timeText = addZero(hours) + ":" + addZero(now.getMinutes()) + ":" + addZero(now.getSeconds()) + " " + ampm;

    document.getElementById("tickerDate").innerText = "Date: " + dateText;
    document.getElementById("tickerTime").innerText = "Time: " + timeText;
}

updateClock();
setInterval(updateClock, 1000);   // update every 1 second

// Location (HTML5 Geolocation)

function locationFound(position) {

    let lat = position.coords.latitude.toFixed(4);
    let lon = position.coords.longitude.toFixed(4);
    let place = document.getElementById("tickerLocation");

    // first show the coordinates
    place.innerText = "Location: Latitude " + lat + ", Longitude " + lon;

    // then try to find the city name (needs internet)
    fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + lat + "&longitude=" + lon + "&localityLanguage=en")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let city = data.city || data.locality;
            if (city) {
                place.innerText = "Location: " + city + ", " + data.countryName + " (" + lat + ", " + lon + ")";
            }
        })
        .catch(function() {
            // no internet: keep showing the coordinates
        });
}

function locationNotFound() {
    document.getElementById("tickerLocation").innerText = "Location: Not available (please allow location access)";
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(locationFound, locationNotFound);
} else {
    document.getElementById("tickerLocation").innerText = "Location: Not supported by this browser";
}


// ------------------------------------------------------------------
// Single Page Application (SPA) Navigation
// Only one section is displayed at a time.
// The page changes through JavaScript without reloading the website.
// ------------------------------------------------------------------

let appSections = document.querySelectorAll("body > section");
let sectionDisplay = {};

for (let i = 0; i < appSections.length; i++) {
    sectionDisplay[appSections[i].id] = getComputedStyle(appSections[i]).display;
}

function showPage(pageId) {

    let pageFound = false;

    for (let i = 0; i < appSections.length; i++) {

        if (appSections[i].id == pageId) {
            appSections[i].style.display = sectionDisplay[pageId];
            appSections[i].classList.add("section-fade");
            pageFound = true;

            setTimeout(function() {
                appSections[i].classList.remove("section-fade");
            }, 700);

        } else {
            appSections[i].style.display = "none";
        }
    }

    if (!pageFound) {
        pageId = "home";
        for (let i = 0; i < appSections.length; i++) {
            appSections[i].style.display =
                appSections[i].id == "home" ? sectionDisplay["home"] : "none";
        }
    }

    // Update the active navbar link
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].classList.remove("active");

        if (menuLinks[i].getAttribute("href") == "#" + pageId) {
            menuLinks[i].classList.add("active");
        }
    }

    // Close the mobile menu after selecting a page
    document.getElementById("menuLinks").classList.remove("show");

    window.scrollTo(0, 0);
}

// Open pages without reloading the website
document.addEventListener("click", function(event) {

    let link = event.target.closest('a[href^="#"]');

    if (link) {
        let pageId = link.getAttribute("href").substring(1);

        if (document.getElementById(pageId) &&
            document.getElementById(pageId).tagName == "SECTION") {

            event.preventDefault();
            history.pushState(null, "", "#" + pageId);
            showPage(pageId);
        }
    }
});

// Browser back and forward buttons
window.addEventListener("popstate", function() {
    showPage(location.hash.substring(1) || "home");
});

// Explore button opens Products without reloading
document.getElementById("exploreBtn").onclick = function() {
    history.pushState(null, "", "#products");
    showPage("products");
};

// Show the correct section when the website first opens
showPage(location.hash.substring(1) || "home");

