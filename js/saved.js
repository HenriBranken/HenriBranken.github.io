$(function () {

    // The container containing all the appended <p> elements in the saved.html document.
    let $divParagraphs = $('div.saved-items');

    // Loop over localStorage, and create a paragraph per item in the localStorage.
    for (let i = 0; i < localStorage.length; i++)
    {
        let position = i + 1;
        let info = JSON.parse(localStorage.getItem(localStorage.key(i)));
        let hrefValue = info.hrefValue; // Used to create an <a> element.
        let text = info.text;  // Extract the text to be pasted inside the <p> element.

        // Create <p> with string interpolation.
        // Notice that a hyperlink is created to take the user back to the desired element.
        let parElem = `<p><strong>[${position}]</strong>&nbsp;&nbsp;&nbsp;&nbsp;<a href=${hrefValue}>${text}</a></p>`;

        // Append the `parElem` created above.
        $divParagraphs.append(parElem);
    }

});