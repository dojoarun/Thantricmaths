function filter(element) {
    var value = $(element).val();

    $("#theList > card").each(function() {
        if ($(this).text().search(value) > -1) {
            $(this).show();
        }
        else {
            $(this).hide();
        }
    });
}