$(document).ready(function() {

    //回頂端
    $('.top').hide();
    $(document).scroll(function () {
        if ($(document).scrollTop() > 500) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    $('.top').click(function () {
        $('html,body').animate({ 'scrollTop': '0px' }, 1000);
    });

    //捲軸往下時 選單固定在上
    $(document).scroll(function () {
        if ($(document).scrollTop() > 20) {
            $('nav').addClass('navfix');
        } else {
            $('nav').removeClass('navfix');
        }
    });

    //Madal標題資訊
    $('#removeModal').on('show.bs.modal', function (event) {
        var btn = $(event.relatedTarget);
        var title = btn.data('title');
        var modal = $(this);
        modal.find('.modal-title').text('刪除 ' + title);
    });
    
});

// 表單驗證
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();