function modifiedAlertCamps() {
    // Se modifican los inputs y los valores según la eleccion en los radios

    $("#input-alert-simple, #input-alert-1, #input-alert-2").focus(function () {
        $(this).val(btcPrice);
    });

    $("#btc-radio").change(function () {
        cryptoRadioChoice = this.value;

        $("#input-alert-simple, #input-alert-1, #input-alert-2").focus(function () {
            $(this).val(btcPrice);
        });
    });

    $("#eth-radio").change(function () {
        cryptoRadioChoice = this.value;

        $("#input-alert-simple, #input-alert-1, #input-alert-2").focus(function () {
            $(this).val(ethPrice);
        });
    });

    $("#radio-simple").change(function () {
        $('#input-alert-simple').css('display', 'block');
        $('#input-alert-1').css('display', 'none');
        $('#input-alert-2').css('display', 'none');
        $('#input-volume-alert').css('display', 'none');
        $("#formu input[name='input-alert-price']").val("");
        $('#alert-desc').val("");
        alertTypeChoice = 'simple';
    });

    $("#radio-doble").change(function () {
        $('#input-alert-simple').css('display', 'none');
        $('#input-alert-1').css('display', 'block');
        $('#input-alert-2').css('display', 'block');
        $('#input-volume-alert').css('display', 'none');
        $("#formu input[name='input-alert-price']").val("");
        $('#alert-desc').val("");
        alertTypeChoice = 'double';
    });

    $("#radio-volume").change(function () {
        $('#input-alert-simple').css('display', 'none');
        $('#input-alert-1').css('display', 'none');
        $('#input-alert-2').css('display', 'none');
        $('#input-volume-alert').css('display', 'block');
        $("#formu input[name='input-alert-price']").val("");
        $('#alert-desc').val("");
        alertTypeChoice = 'volume';
    });
}