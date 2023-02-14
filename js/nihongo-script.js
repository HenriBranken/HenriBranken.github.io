$(function () {

    /* 'BACK-TO-TOP' BUTTON CONFIGURATION -----------------------------------------------------*/
    $window = $(window);
    $backToTop = $('body.nihongo div.back-to-top')

    $window.on('scroll', function () {
        if ($window.scrollTop() >= 200) {
            $backToTop.fadeIn(700);
        }
        else {
            $backToTop.fadeOut(700);
        }
    });

    /* SLIDER CONFIGURATION -------------------------------------------------------------------*/

    // Slider parameters:
    pauseInterval = 4500;  // Pause between each picture.
    animDuration = 2000;  // How quickly the next picture animates.
    imgWidth = 1111;  // in pixels.

    // Caching the DOM
    $slider = $('div.compound-cards');  // Main wrapper.
    $slides = $('ul.compound-cards');  // <ul> list containing the list items of the pictures.
    $liElems = $slides.find('li');  // All the <li> elements inside the <ul>.
    $liFirst = $liElems.first();
    len = $liElems.length;  // The number of <li> elements inside <ul>.
    console.log(len);

    let slideInterval;  // Set global scope on setInterval id returned below.
    currentSlide = 1;  // Initialise a counter.
    function startSlider() {
        slideInterval = setInterval(function () {
            $slides.animate({ 'margin-left': `-=${imgWidth}px` }, animDuration, function () {
                currentSlide++;  // Increment the counter.
                if (currentSlide === (len)) {  // If we've reached the last picture.
                    currentSlide = 1;  // Revert back to slide 1.
                    $slides.css({  // Revert back to 0px for margin-left.
                        'margin-left': '0px'
                    });
                }
            });
        },
            pauseInterval);  // Pause for both $slides.animate() and $('body').animate().
    };

    function stopSlider() { // When hovering over the image, stop the slider.
        clearInterval(slideInterval);
    }
    startSlider(); // Kickstart the startSlider() function once document has loaded.

    // If mouse is over the image, invoke stopSlider().
    // If mouse moves out of the image, invoke startSlider().
    $slider.on('mouseover', stopSlider).on('mouseout', startSlider);

    /*LEAVE-A-REPLY FORM -------------------------------------------------------------------*/
    let $formSubmit = $('form.nhg-reply>input[type="submit"]'); // The submit button
    let $formText = $('form.nhg-reply>textarea.nhg-reply-input[name="text"]'); // The user input (or text).
    let $psContainer = $('div.nhg-reply>div.nhg-reply-ps'); // Container for all the <p> elements.

    // A function that gets invoked everytime the user clicks the SUBMIT button.
    function createParagraph(txt) {
        let today = new Date(); // Extract the current date and time.
        let date = today.getFullYear() + '-' + ("00" + (today.getMonth() + 1)).slice(-2) + '-' + ("00" + today.getDate()).slice(-2);
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time; // Create a date-time stamp.
        let htmlVal = `<p>${txt}<span><u>${dateTime}</u></span></p>`; // Create <p> element.
        return htmlVal;
    }

    // What to do when the user clicks on the SUBMIT button.
    $formSubmit.on('click', function(e) 
    {
        e.preventDefault(); // Don't refresh.
        let userText = $formText.val(); // Extract the user input (text).
        $psContainer.append(createParagraph(userText)); // Append a new paragraph to the container.
        $formText.val(''); // Reset the form text to nothing so that the placeholder text will display.
    })

});