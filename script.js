/* =====================================================
   PRODUCT IMAGE GALLERY
===================================================== */


const productImages = {

    coffee: {

        title: "☕ Coffee Gallery",

        images: [

            "https://loremflickr.com/800/500/coffee",

            "https://loremflickr.com/800/500/coffeebeans",

            "https://loremflickr.com/800/500/coffeeplant"

        ]

    },


    pepper: {

        title: "🌶️ Pepper Gallery",

        images: [

            "https://loremflickr.com/800/500/blackpepper",

            "https://loremflickr.com/800/500/pepper",

            "https://loremflickr.com/800/500/peppercorn"

        ]

    },


    ginger: {

        title: "🫚 Ginger Gallery",

        images: [

            "https://loremflickr.com/800/500/ginger",

            "https://loremflickr.com/800/500/gingerroot",

            "https://loremflickr.com/800/500/freshginger"

        ]

    },


    cashew: {

        title: "🥜 Cashew Nuts Gallery",

        images: [

            "https://loremflickr.com/800/500/cashews",

            "https://loremflickr.com/800/500/cashewnuts",

            "https://loremflickr.com/800/500/nuts"

        ]

    },


    turmeric: {

        title: "🟡 Turmeric Gallery",

        images: [

            "https://loremflickr.com/800/500/turmeric",

            "https://loremflickr.com/800/500/turmericroot",

            "https://loremflickr.com/800/500/turmericpowder"

        ]

    },


    cotton: {

        title: "🌿 Cotton Gallery",

        images: [

            "https://loremflickr.com/800/500/cotton",

            "https://loremflickr.com/800/500/cottonplant",

            "https://loremflickr.com/800/500/cottonfield"

        ]

    },


    groundnuts: {

        title: "🥜 Groundnuts Gallery",

        images: [

            "https://loremflickr.com/800/500/peanuts",

            "https://loremflickr.com/800/500/groundnuts",

            "https://loremflickr.com/800/500/peanut"

        ]

    },


    jambari: {

        title: "🍋 Jambari Gallery",

        images: [

            "https://loremflickr.com/800/500/lemon",

            "https://loremflickr.com/800/500/citrus",

            "https://loremflickr.com/800/500/citrusfruit"

        ]

    },


    chillies: {

        title: "🌶️ Green Chillies Gallery",

        images: [

            "https://loremflickr.com/800/500/greenchilli",

            "https://loremflickr.com/800/500/greenpepper",

            "https://loremflickr.com/800/500/chilli"

        ]

    }

};


let currentProduct = "";

let currentImageIndex = 0;



/* OPEN GALLERY */

function openGallery(product) {

    currentProduct = product;

    currentImageIndex = 0;


    const modal =
        document.getElementById(
            "galleryModal"
        );


    modal.style.display = "flex";


    showGalleryImage();

}



/* SHOW IMAGE */

function showGalleryImage() {

    const product =
        productImages[currentProduct];


    document.getElementById(
        "galleryTitle"
    ).innerText =
        product.title;


    document.getElementById(
        "galleryImage"
    ).src =
        product.images[currentImageIndex];


    document.getElementById(
        "imageCounter"
    ).innerText =

        "Image " +
        (currentImageIndex + 1) +
        " of " +
        product.images.length;

}



/* NEXT IMAGE */

function nextImage() {

    const product =
        productImages[currentProduct];


    currentImageIndex++;


    if (
        currentImageIndex >=
        product.images.length
    ) {

        currentImageIndex = 0;

    }


    showGalleryImage();

}



/* PREVIOUS IMAGE */

function previousImage() {

    const product =
        productImages[currentProduct];


    currentImageIndex--;


    if (currentImageIndex < 0) {

        currentImageIndex =
            product.images.length - 1;

    }


    showGalleryImage();

}



/* CLOSE GALLERY */

function closeGallery() {

    document.getElementById(
        "galleryModal"
    ).style.display = "none";

}



/* Close when clicking outside */

window.onclick = function(event) {

    const modal =
        document.getElementById(
            "galleryModal"
        );


    if (event.target === modal) {

        closeGallery();

    }

};



/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */


function revealElements() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    elements.forEach(function(element) {

        const windowHeight =
            window.innerHeight;


        const elementTop =
            element.getBoundingClientRect()
            .top;


        if (
            elementTop <
            windowHeight - 80
        ) {

            element.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    revealElements
);


revealElements();



/* =====================================================
   BOOKING SYSTEM
===================================================== */


const bookingForm =
    document.getElementById(
        "bookingForm"
    );


bookingForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const phone =
            document.getElementById(
                "phone"
            ).value.trim();


        const product =
            document.getElementById(
                "product"
            ).value;


        const quantity =
            document.getElementById(
                "quantity"
            ).value;


        const pickup =
            document.getElementById(
                "pickup"
            ).value.trim();


        const delivery =
            document.getElementById(
                "delivery"
            ).value.trim();


        const vehicle =
            document.getElementById(
                "vehicle"
            ).value;


        const date =
            document.getElementById(
                "date"
            ).value;



        /* PHONE VALIDATION */

        if (
            !/^[0-9]{10}$/.test(phone)
        ) {

            showMessage(
                "❌ Please enter a valid 10-digit mobile number.",
                "error"
            );

            return;

        }



        /* QUANTITY VALIDATION */

        if (quantity <= 0) {

            showMessage(
                "❌ Please enter a valid quantity.",
                "error"
            );

            return;

        }



        /* CREATE BOOKING */

        const booking = {

            id: Date.now(),

            name: name,

            phone: phone,

            product: product,

            quantity: quantity,

            pickup: pickup,

            delivery: delivery,

            vehicle: vehicle,

            date: date

        };



        /* GET OLD BOOKINGS */

        let bookings =

            JSON.parse(
                localStorage.getItem(
                    "agroBookings"
                )
            ) || [];



        /* ADD NEW BOOKING */

        bookings.push(booking);



        /* SAVE TO LOCAL STORAGE */

        localStorage.setItem(

            "agroBookings",

            JSON.stringify(bookings)

        );



        /* SUCCESS MESSAGE */

        showMessage(

            "✅ Transportation booking completed successfully!",

            "success"

        );



        /* RESET FORM */

        bookingForm.reset();



        /* DISPLAY BOOKINGS */

        displayBookings();

    }
);



/* =====================================================
   MESSAGE
===================================================== */


function showMessage(
    message,
    type
) {

    const messageBox =
        document.getElementById(
            "message"
        );


    messageBox.innerText =
        message;


    if (type === "success") {

        messageBox.style.backgroundColor =
            "#c8e6c9";

        messageBox.style.color =
            "#1b5e20";

    }

    else {

        messageBox.style.backgroundColor =
            "#ffcdd2";

        messageBox.style.color =
            "#b71c1c";

    }

}



/* =====================================================
   DISPLAY BOOKING HISTORY
===================================================== */


function displayBookings() {

    const bookingList =
        document.getElementById(
            "bookingList"
        );


    let bookings =

        JSON.parse(
            localStorage.getItem(
                "agroBookings"
            )
        ) || [];



    bookingList.innerHTML = "";



    if (
        bookings.length === 0
    ) {

        bookingList.innerHTML =
            "<p>No bookings available.</p>";

        return;

    }



    bookings.forEach(
        function(booking) {

            const bookingItem =
                document.createElement(
                    "div"
                );


            bookingItem.className =
                "booking-item";


            bookingItem.innerHTML = `

                <h3>
                    🚚 ${booking.product}
                    Transportation
                </h3>

                <p>
                    <strong>
                    Customer:
                    </strong>
                    ${booking.name}
                </p>

                <p>
                    <strong>
                    Phone:
                    </strong>
                    ${booking.phone}
                </p>

                <p>
                    <strong>
                    Quantity:
                    </strong>
                    ${booking.quantity} KG
                </p>

                <p>
                    <strong>
                    Pickup:
                    </strong>
                    ${booking.pickup}
                </p>

                <p>
                    <strong>
                    Delivery:
                    </strong>
                    ${booking.delivery}
                </p>

                <p>
                    <strong>
                    Vehicle:
                    </strong>
                    ${booking.vehicle}
                </p>

                <p>
                    <strong>
                    Date:
                    </strong>
                    ${booking.date}
                </p>

            `;


            bookingList.appendChild(
                bookingItem
            );

        }
    );

}



/* =====================================================
   CLEAR BOOKINGS
===================================================== */


function clearBookings() {

    const confirmDelete =
        confirm(
            "Are you sure you want to clear all bookings?"
        );


    if (confirmDelete) {

        localStorage.removeItem(
            "agroBookings"
        );


        displayBookings();


        showMessage(
            "Booking history cleared.",
            "success"
        );

    }

}



/* =====================================================
   ESC KEY CLOSE GALLERY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeGallery();

        }

    }
);