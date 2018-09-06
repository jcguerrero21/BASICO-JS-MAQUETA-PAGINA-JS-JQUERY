$(document).ready(function() {

    //Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            reponsive: true,
            pager: true,
            controls: true
        });

        //Posts

        var posts = [{
                title: 'Prueba de titulo 1',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nisi dolor. Integer feugiat aliquet libero molestie rutrum. Mauris auctor pretium velit et varius. Vivamus dictum, sapien at congue volutpat, tellus orci placerat sapien,non consectetur odio tortor ut metus.Aenean aliquet eu enim sed malesuada.Nullam risus urna, faucibus hendrerit aliquam sit amet, ultricies at metus.Donec imperdiet rhoncus ullamcorper.Curabitur id orci at lorem suscipit cong eu sit amet ante.Aenean arcu neque, tincidunt id ex vitae, gravida malesuada mi.Mauris a augue aliquam, vestibulum dolor et, aliquam sem.Duis eu efficitur lacus.Morbi ante massa, ultrices vitae mattis sed, ornare non tortorEtiam velit nibh, fringilla id nibh ac, mattis ultricies est.Cras ultricies at est sed fringilla.In tempus justo non orci eleifend maximus.Praesent urna tortor, luctus eget eros at, cursus consectetur tortor.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nisi dolor. Integer feugiat aliquet libero molestie rutrum. Mauris auctor pretium velit et varius. Vivamus dictum, sapien at congue volutpat, tellus orci placerat sapien,non consectetur odio tortor ut metus.Aenean aliquet eu enim sed malesuada.Nullam risus urna, faucibus hendrerit aliquam sit amet, ultricies at metus.Donec imperdiet rhoncus ullamcorper.Curabitur id orci at lorem suscipit cong eu sit amet ante.Aenean arcu neque, tincidunt id ex vitae, gravida malesuada mi.Mauris a augue aliquam, vestibulum dolor et, aliquam sem.Duis eu efficitur lacus.Morbi ante massa, ultrices vitae mattis sed, ornare non tortorEtiam velit nibh, fringilla id nibh ac, mattis ultricies est.Cras ultricies at est sed fringilla.In tempus justo non orci eleifend maximus.Praesent urna tortor, luctus eget eros at, cursus consectetur tortor.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nisi dolor. Integer feugiat aliquet libero molestie rutrum. Mauris auctor pretium velit et varius. Vivamus dictum, sapien at congue volutpat, tellus orci placerat sapien,non consectetur odio tortor ut metus.Aenean aliquet eu enim sed malesuada.Nullam risus urna, faucibus hendrerit aliquam sit amet, ultricies at metus.Donec imperdiet rhoncus ullamcorper.Curabitur id orci at lorem suscipit cong eu sit amet ante.Aenean arcu neque, tincidunt id ex vitae, gravida malesuada mi.Mauris a augue aliquam, vestibulum dolor et, aliquam sem.Duis eu efficitur lacus.Morbi ante massa, ultrices vitae mattis sed, ornare non tortorEtiam velit nibh, fringilla id nibh ac, mattis ultricies est.Cras ultricies at est sed fringilla.In tempus justo non orci eleifend maximus.Praesent urna tortor, luctus eget eros at, cursus consectetur tortor.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac nisi dolor. Integer feugiat aliquet libero molestie rutrum. Mauris auctor pretium velit et varius. Vivamus dictum, sapien at congue volutpat, tellus orci placerat sapien,non consectetur odio tortor ut metus.Aenean aliquet eu enim sed malesuada.Nullam risus urna, faucibus hendrerit aliquam sit amet, ultricies at metus.Donec imperdiet rhoncus ullamcorper.Curabitur id orci at lorem suscipit cong eu sit amet ante.Aenean arcu neque, tincidunt id ex vitae, gravida malesuada mi.Mauris a augue aliquam, vestibulum dolor et, aliquam sem.Duis eu efficitur lacus.Morbi ante massa, ultrices vitae mattis sed, ornare non tortorEtiam velit nibh, fringilla id nibh ac, mattis ultricies est.Cras ultricies at est sed fringilla.In tempus justo non orci eleifend maximus.Praesent urna tortor, luctus eget eros at, cursus consectetur tortor.'
            }
        ];


        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
        `;

            $("#posts").append(post);
        });

    }

    //Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function() {
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function() {
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function() {
        theme.attr("href", "css/blue.css");
    });

    //Scroll arriba de la web
    $('.subir').click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso
    $("#login form").submit(function() {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append('<a href="#" id="logout" style="float: right; text-decoration: none;">Cerrar sesión</a>')

        $("#login").hide();

        $("#logout").click(function() {
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeon
    if (window.location.href.indexOf('about') > -1) {

        $('#acordeon').accordion();

    }

    //Reloj
    if (window.location.href.indexOf('reloj') > -1) {
        var reloj = moment().format("h:mm:ss");
        $("#reloj").html(reloj);

        setInterval(function() { //El set interval nos permite ejecutar cada x tiempos que nosotros le indiquemos un periodo de instrucciones
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj);
        }, 1000)
    }

    //Validación
    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd/mm/yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

});