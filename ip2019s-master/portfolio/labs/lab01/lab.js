/*

*/


function start(e) {
    var name = [
        {
            char: '李',
            big5: 'A7F5',
            cns: '1-4A57',
            unicode: '674E'
        },
        {
            char: '以',
            big5: 'A548',
            cns: '1-4568',
            unicode: '4EE5'
        },
        {
            char: '謙',
            big5: 'C1BE',
            cns: '1-7549',
            unicode: '8B19'
        },
        ];

    var ele = document.getElementById("div1");

    for(var i = 0;i < 3;i++){
        ele.innerHTML += name[i].char;
        ele.innerHTML += ' big5 = ';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' cns = ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += '  unicode = ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
        }


}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
