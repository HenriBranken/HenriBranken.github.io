$(function () {

    /* BACK-TO-TOP BUTTON ------------------------------------------------------------------*/
    let $window = $(window);
    let $backToTop = $('body.about-me div.back-to-top');
    $window.on('scroll', function () {
        if ($window.scrollTop() >= 200) {
            $backToTop.fadeIn(700);
        }
        else {
            $backToTop.fadeOut(700);
        }
    });

    /* ACCORDION ----------------------------------------------------------------------------*/
    // Caching the DOM.
    $accordion = $('div.myAccordion');
    $accordionEntities = $('div.myAccordion').find('div.yyyy-entry');
    $accHeadings = $('div.myAccordion').find('div.yyyy-heading');
    $accDescriptions = $('div.myAccordion').find('div.yyyy-description');

    // Close a panel of the Accordion if another panel is opened, or if existing panel is closed.
    function revertAccordion($heading, $icon, $panelAffected, $entity) {
        $heading.animate({ 'background-color': 'rgba(0, 0, 0, 0)' }, 300)
            .removeClass('active');

        $icon.removeClass('fa-minus-circle')
            .addClass('fa-plus-circle');

        $panelAffected.slideUp(300, function () {
            $(this).removeClass('active');
        });

        $entity.removeClass('active');
    }

    // Open up a panel of the Accordion once clicked.
    function triggerAccordion($heading, $icon, $panelAffected, $entity) {
        $heading.animate({ 'background-color': 'rgba(210, 142, 83, 1)' }, 300)
            .addClass('active');

        $icon.removeClass('fa-plus-circle')
            .addClass('fa-minus-circle');

        $panelAffected.slideDown(300)
            .fadeIn(300)
            .css({ 'background-color': 'rgba(210, 142, 83, 0.5)' })
            .addClass('active');

        $entity.addClass('active');
    }

    // Revert the Accordion back to its original, closed state.
    function wipeAccordion() { // Relies on the `revertAccordion()` function.
        $accordion.find('div.yyyy-entry.active').each(function(index, element) {
            $heading = $(element).find('div.yyyy-heading');
            $entity = $(element);
            $icon = $heading.find('span > i');
            $panelAffected = $entity.find('div.yyyy-description');
            revertAccordion($heading, $icon, $panelAffected, $entity);
        }); 
    }

    // What to do when a heading of the Accordion is clicked on:
    $accordion.on('click', 'div.yyyy-heading', function (e) {
        wipeAccordion();
        $heading = $(this);  // <div.yyyy-heading>
        $entity = $heading.closest('div.yyyy-entry'); // <div.yyyy-entry>
        $icon = $heading.find('span > i'); // <i>
        $panelAffected = $heading.next();  // <div.yyyy-description>

        headingBackground = e.currentTarget['style'].backgroundColor;
        if (headingBackground === 'rgb(210, 142, 83)') { // Close the accordion.
            revertAccordion($heading, $icon, $panelAffected, $entity);
        }
        else { // Expand the accordion.
            triggerAccordion($heading, $icon, $panelAffected, $entity);
        }
    })

    // Configuration of the DEFAULT tab that should be open once the page is loaded.
    let $defaultEntity = $('div.yyyy-entry').first();
    let $defaultHeading = $defaultEntity.find('div.yyyy-heading');
    let $defaultIcon = $defaultHeading.find('span i');
    let $defaultPanel = $defaultEntity.find('div.yyyy-description');
    triggerAccordion($defaultHeading, $defaultIcon, $defaultPanel, $defaultEntity);
    
    /* VERTICAL DROPDOWN MENU -----------------------------------------------------------------------*/

    $('li.li-level-1.has-sub').on('click', function (e) 
    {
        e.stopPropagation();
        let $ulNest2 = $(this).find('ul.ul-nest-2');
        if ($ulNest2.is('.tap')) { // Hide the ul-nest-2.
            $ulNest2.slideUp(500).toggleClass('tap');
            $(this).toggleClass('tap');
        }
        else { // Show the ul-nest-2
            $ulNest2.slideDown(500).toggleClass('tap');
            $(this).toggleClass('tap');
        }        
    });


    $('li.li-level-2.has-sub').on('click', function (e) 
    {
        e.stopPropagation();
        let $ulNest3 = $(this).find('ul.ul-nest-3');
        if ($ulNest3.is('.tap')) {  // Hide the ul-nest-3.
            $ulNest3.slideUp(500).toggleClass('tap');
            $(this).toggleClass('tap');
        }
        else { // Show the ul-next-3.
            $ulNest3.slideDown(500).toggleClass('tap');
            $(this).toggleClass('tap');
        }        
    });

    // Elements that don't have submenus don't have click functionality.
    $('li.li-level-1:not(.has-sub)').off('click');
    $('li.li-level-2:not(.has-sub)').off('click');


});