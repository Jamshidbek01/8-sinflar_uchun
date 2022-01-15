function inputenter() {
var score = document.getElementsByClassName('input')[0].value;

if ( score >= 100 ) {
    document.getElementsByClassName('byscore')[0].innerHTML = 'Tabriklaymiz!!! Ertaga Yaypanni centeriga kelsangiz Traiblaizer mashinasini olasiz bu sizning yutug`ingiz';
}
else if ( score < 99 && score >= 90 ) {
    document.getElementsByClassName('byscore')[0].innerHTML = 'Tabriklaymiz!!! Ertaga Yaypanni centeriga kelsangiz Iphone 13 Pro Max olasiz bu sizning yutug`ingiz';
}
else if ( score < 90 && score >= 70 ) {
    document.getElementsByClassName('byscore')[0].innerHTML = 'Juda Yaxshi!!!';
}
else if ( score < 70 && score >= 40 ) {
    document.getElementsByClassName('byscore')[0].innerHTML = 'Yaxshi!!!';
}
else if ( score < 40 && score >= 20 ) {
    document.getElementsByClassName('byscore')[0].innerHTML = 'Yomon!';
}
else if ( score < 20 && score >= 10 ) {
    document.getElementsByClassName('byscore')[0].innerHTML = 'Juda yomon!';
}
else if ( score < 10 && score >= 1 ) {
    document.getElementsByClassName('byscore')[0].innerHTML = 'Saytga kirishga megabayt topibsiz unda YouTubega kirib matematikadan videodars tomosha qiling';
}
else if ( score <=0 ) {
    document.getElementsByClassName('byscore')[0].innerHTML = 'Demak siz 8-sinf emassiz';
}
document.getElementsByClassName('submit')[0].innerHTML = 'Natija'
}