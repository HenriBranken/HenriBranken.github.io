// Specify a list of colorful linear-gradients to layer over the 'japanese-style.webp' image on the index.html page.
let ls = [
    'linear-gradient(to top right, rgb(227, 179, 172, 0.1), rgb(227, 179, 172, 0.4)), url("../images/japanese-style.webp")',
    'linear-gradient(to bottom, rgb(159,178,187, 0.1), rgb(159,178,187, 0.5)), url("../images/japanese-style.webp")',
    'linear-gradient(to bottom left, rgb(222, 158, 102, 0.1), rgb(222, 158, 102, 0.5)), url("../images/japanese-style.webp")',
    'linear-gradient(to top left, rgba(65,71,89, 0.2), rgba(65,71,89,0.4)), url("../images/japanese-style.webp")',
    'linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5)), url("../images/japanese-style.webp")',
    'linear-gradient(to top right, rgb(227, 179, 172, 0.1), rgb(227, 179, 172, 0.4)), url("../images/japanese-style.webp")',
    'url("../images/japanese-style.webp")'
]

$(function () {
    // Let petals rain down from the top of the screen.
    $('body').sakura();
    
    // <div.banner> is a placeholder for the fixed background image.
    $banner = $('div.banner');
    let counter = 0;  // Initialise the counter that will loop through the Array `ls`.
    setInterval(function ()
        {
            let code = ls[counter]; // Extract the `code` from `ls[counter]`.
            $banner.css({'background-image': code}); // Style the background-image with `code`.
            counter++; // increment the counter.
                if (counter == ls.length) // Make `ls` array cyclical.
                {
                    counter = 0; // Go back to the beginning if we've reached the end of `ls`.
                }
        },
        4000); // Initiate every 4 seconds.
})

/*
$('body').sakura();
Originally thought up and commissioned by Naomi Forame.
Retrieved on 8 February 2023, from https://github.com/nayleen/jQuery-Sakura, 
*/

