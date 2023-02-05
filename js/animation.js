{
    $(document).ready(function() {
        makeDiv();
        divPosition();
    });

    function makeDiv() {
        for (i = 1; i <= 150; i++) {
            $('#all').append('<div></div>');
        }
    }

    function divPosition() {
        for (i = 1; i <= 150; i++) {
            var R = Math.floor(Math.random() * 256),
                G = Math.floor(Math.random() * 256),
                B = Math.floor(Math.random() * 256),
                X = Math.floor(Math.random() * 361),
                Y = Math.floor(Math.random() * 361),
                Z = Math.floor(Math.random() * 201) + 35,
                size = Math.floor(Math.random() * 50 + 10);
            $('#all div:nth-child(' + i + ')').css({ background: 'rgba(' + R + ',' + G + ',' + B + ',.5)', transform: 'rotateX(' + X + 'deg) rotateY(' + Y + 'deg) translateZ(' + Z + 'px)', width: size + 'px', height: size + 'px' });
        }
    }
}