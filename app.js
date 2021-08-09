javascript:
var host = window.location.hostname;
var pathname = window.location.pathname;
var https_host = "https://" + host + pathname;
var x = document.getElementsByClassName("video-card-browse")[0].getElementsByTagName('video')[0].src;
window.open(x, '_blank');   