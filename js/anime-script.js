$(function () {
    // Caching the DOM:
    $window = $(window);
    $reason_1 = $('article.reason-n.reason-1');
    $reason_2 = $('article.reason-n.reason-2');
    $reason_3 = $('article.reason-n.reason-3');
    $reason_4 = $('article.reason-n.reason-4');
    $backToTop = $('body.anime div.back-to-top')

    // Animate the different <articles> as one scrolls through the page.
    // Also, display/hide the 'back-to-top' button depending on the .scrollTop() value.
    $window.on('scroll', function () {
        if ($window.scrollTop() >= 200) {
            $backToTop.fadeIn(700);
        }
        else {
            $backToTop.fadeOut(700);
        }

        // Captivating Plot
        if (($window.scrollTop() >= 300) && ($window.scrollTop() < 1290)) {
            $reason_1.addClass('scrolled');
        }
        else {
            $reason_1.removeClass('scrolled');
        }

        // Excellent Animation
        if (($window.scrollTop() >= 1300) && ($window.scrollTop() < 2090)) {
            $reason_2.addClass('scrolled');
        }
        else {
            $reason_2.removeClass('scrolled');
        }

        // Expand your imagination
        if (($window.scrollTop() >= 2100) && ($window.scrollTop() < 2850)) {
            $reason_3.addClass('scrolled');
        }
        else {
            $reason_3.removeClass('scrolled');
        }

        // Colorful and Appealing Visuals.
        if (($window.scrollTop() >= 2900) && ($window.scrollTop() < 3700)) {
            $reason_4.addClass('scrolled');
        }
        else {
            $reason_4.removeClass('scrolled');
        }
    });

    /*THE TEASER BUTTON & IMAGE ------------------------------------------------------------*/
    $leaf = $('i.fa.fa-leaf');
    let deg = 5;
    setInterval(function () {
        $leaf[0].style.transform = "rotate(" + deg + "deg)";
        deg = (deg + 10) % 360;
    }, 100);


    // What to do when the leaf button is clicked on.
    $('i.fa.fa-leaf').on('click', function(e) {
        $('i.fa.fa-leaf').fadeOut(800); // Remove the leaf button.
        $('div.teaser-img').fadeIn(800); // Reveal the image.
        $('i.fa.fa-stop-circle').fadeIn(800); // Replace leaf button with stop button.
    })
    
    // What to do if the stop button is clicked on.
    $('i.fa.fa-stop-circle').on('click', function(e) {
        $('i.fa.fa-stop-circle').fadeOut(800); // Remove the stop button.
        $('div.teaser-img').fadeOut(800); // Remove the image from the display.
        $('i.fa.fa-leaf').fadeIn(800); // Replace the stop button with the leaf button.
    })

    /*LEAVE-A-REPLY FORM -------------------------------------------------------------------*/
    let $formSubmit = $('form.anime-reply>input[type="submit"]');
    let $formText = $('form.anime-reply>textarea.anime-reply-input[name="text"]');
    let $psContainer = $('div.anime-reply>div.anime-reply-ps');

    // Function that gets invoked when the user clicks on the "Submit" button.
    // It creates a paragraph node from the user input, and then appends it to the container.
    function createParagraph(txt) {
        let today = new Date();
        let date = today.getFullYear() + '-' + ("00" + (today.getMonth() + 1)).slice(-2) + '-' + ("00" + today.getDate()).slice(-2);
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        let htmlVal = `<p>${txt}<span><u>${dateTime}</u></span></p>`;
        return htmlVal;
    }

    // What to do when the user clicks on the SUBMIT button.
    $formSubmit.on('click', function(e) 
    {
        e.preventDefault(); // Don't refresh.
        let userText = $formText.val(); // Extract the user input (text).
        $psContainer.append(createParagraph(userText)); // Add another paragraph to the container.
        $formText.val(''); // Reset the form text value to nothing so that the placeholder text appears.
    })
});