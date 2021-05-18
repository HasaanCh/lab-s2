jQuery(document).ready(function ($) {
    getData(1);

    $('.prev.nav-button').addClass('disabled');
    function getData(pagenum) {
        $.ajax({
            type: "get",
            url: "https://reqres.in/api/users?page=" + pagenum,
            beforeSend: function () {
                $('.main-data').append('<p class="loading">Loading.....</p>');
            },
            success: function (response) {
                $('.main-data').html('');
                console.log(response);
                for (var i = 0; i < response.data.length; i++) {
                    $('.main-data').append('<div class="record"> <p class="id">' + response.data[i].id + '</p> <li class="fname record-list">' + response.data[i].first_name + '</li> <li class="lname record-list">' + response.data[i].last_name + '</li> <li class="email record-list">' + response.data[i].email + '</li> <li class="avatar record-list"> <img src="' + response.data[i].avatar + '" alt=""> </li> </div>');
                }

            }
        });
    }

    $('.next.nav-button').click(function () {
        getData(2);
        $('.next.nav-button').addClass('disabled');
        $('.prev.nav-button').removeClass('disabled');
    });

    $('.prev.nav-button').click(function () {
        getData(1);
        $('.prev.nav-button').addClass('disabled');
        $('.next.nav-button').removeClass('disabled');
    });

});