$(function () {

    /*LIKE BUTTON ----------------------------------------------------------------------------*/
    $likeForm = $('form#like-form');
    $likeForm.on('submit', function (e) {
        e.preventDefault();  // Don't refresh.
        $thisIcon = $(e.currentTarget).find('i.like-icon');
        if ($thisIcon.text() === "Like?") {  // Like an item.
            $thisIcon.addClass('fa fa-heart fa-lg');  // Show the heart icon.
            $thisIcon.text("");
            $thisIcon.parent().css({ 'background-color': 'red' });
        }
        else {
            $thisIcon.text("Like?"); // Unlike the item.
            $thisIcon.removeClass('fa fa-heart fa-lg'); // Revert back to the original icon.
            $thisIcon.parent().css({ 'background-color': 'rgba(63, 230, 41, 0.5)' });
        }
        return false;
    });

    /*SAVE-FOR-LATER FUNCTIONALITY -----------------------------------------------------------*/

    // This function is triggered whenever a "Save for Later?" button is clicked.
    // It adds information to the `localStorage` object.
    function pushToLocalStorage(keyVal, remindTxt, idLink) {
        if (localStorage.getItem(keyVal)) {
            alert("You have already saved this item for later...");
            return false;
        }
        else {
            let path = window.location.pathname;
            let anchor = `.${path}#${idLink}`;
            let currentLength = localStorage.length;
            let theObject =
            {
                hrefValue: anchor,
                text: remindTxt
            }
            localStorage.setItem(keyVal, JSON.stringify(theObject));
            currentLength++;
            if (currentLength == 1) {
                alert("There is 1 item saved for later.");
            }
            else {
                alert(`There are ${currentLength} items saved for later.`);
            }
            return true;
        }
    }

    // function removeFromLocalStorage(keyVal) {
    //     let currentLength = localStorage.length;
    //     if (localStorage.getItem(keyVal)) {
    //         localStorage.removeItem(keyVal);
    //         currentLength--;
    //         if (currentLength == 1) {
    //             alert("There is now 1 item saved for later.");
    //         }
    //         else {
    //             alert(`There are now ${currentLength} items saved for later.`);
    //         }
    //         return true;
    //     }
    //     else {
    //         alert('This item was NOT saved for later.')
    //         return false;
    //     }
    // }

    let $sflIcons = $('i.sfl:not(.fa)');
    // $sflIcons.parent().click('off'); // Remove click functionality for the BUTTON elements.
    $sflIcons.on('click', function (e) // Click event, that eventually triggers `pushToLocalStorage()`.
    {
        $thisIcon = $(e.target); // Narrow down to the exact <i> element.
        console.log("in sflIcons");
        $thisBtn = $thisIcon.parent(); // Get the accurate parent of the current <i> element.
        remindTxt = $thisBtn.parent().attr('data-sfl'); // Extract the string in the data-sfl attribute from the containing element.
        keyVal = $thisBtn.parent().attr('data-key'); // Extract the string in the data-key attribute from the containing element.
        idLink = $thisBtn.parent().attr("id"); // Extract the ID value from the containing element.
        let evaluation = pushToLocalStorage(keyVal, remindTxt, idLink); // Trigger the function to add an item to localStorage.
        if (!evaluation) { // If the item already exists in the saved page:
            return;
        }
        else {
            $thisIcon.text(""); // Clear the text
            $thisIcon.addClass("fa fa-paper-plane-o fa-lg");
        }
    });
});