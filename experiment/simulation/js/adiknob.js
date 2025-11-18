new Knob(document.getElementById('ar1'), new Ui.P1());
new Knob(document.getElementById('ar2'), new Ui.P1());
new Knob(document.getElementById('ar3'), new Ui.P1());
  
var d1, c1, d2, c2, d3, c3, o1,o2,o3;

$(document).ready(function(){
o1 = {width: Math.round(Number($("#adisimg").width())*0.08),  min:25, max:41, minorTicks: 5};
o2 = {width: Math.round(Number($("#adisimg").width())*0.08),  min:20, max:30, minorTicks: 5};
o3 = {width: Math.round(Number($("#adisimg").width())*0.08),  min:180, max:360, minorTicks: 5};
$("#ar1v").text($("#ar1").val());
$("#ar2v").text($("#ar2").val());
$("#ar3v").text($("#ar3").val());
});

$("#ar1").change(function(){
    d1 = google.visualization.arrayToDataTable([['Label', 'Value'],['Arc Speed', Number($("#ar1").val())]]);
    c1 = new google.visualization.Gauge(document.getElementById("adi1"));
    $("#ar1v").text($("#ar1").val());
    c1.draw(d1, o1);
});

$("#ar2").change(function(){
    d2 = google.visualization.arrayToDataTable([['Label', 'Value'],['Volt. (V)', Number($("#ar2").val())]]);
    c2 = new google.visualization.Gauge(document.getElementById("adi2"));
    $("#ar2v").text($("#ar2").val());
    c2.draw(d2, o2);
});

$("#ar3").change(function(){
    d3 = google.visualization.arrayToDataTable([['Label', 'Value'],['Amp. (A)', Number($("#ar3").val())]]);
    c3 = new google.visualization.Gauge(document.getElementById("adi3"));
    $("#ar3v").text($("#ar3").val());
    c3.draw(d3, o3);
});

$('#adem a').click(function () {
       
      $('#adidrp').text(Number($(this).text()));
    });

google.charts.load('current', {'packages':['gauge']});
function adi(){
    o1 = {width: Math.round(Number($("#adisimg").width())*0.08),  min:25, max:41, minorTicks: 5};
    o2 = {width: Math.round(Number($("#adisimg").width())*0.08),  min:20, max:30, minorTicks: 5};
    o3 = {width: Math.round(Number($("#adisimg").width())*0.08),  min:180, max:360, minorTicks: 5};  
    d1 = google.visualization.arrayToDataTable([['Label', 'Value'],['Arc Speed', Number($("#ar1").val())]]);
    d2 = google.visualization.arrayToDataTable([['Label', 'Value'],['Volt. (V)', Number($("#ar2").val())]]);
    d3 = google.visualization.arrayToDataTable([['Label', 'Value'],['Amp. (A)', Number($("#ar3").val())]]);
    c1 = new google.visualization.Gauge(document.getElementById("adi1"));
    c2 = new google.visualization.Gauge(document.getElementById("adi2"));
    c3 = new google.visualization.Gauge(document.getElementById("adi3"));
    c1.draw(d1, o1);
    c2.draw(d2, o2);
    c3.draw(d3, o3);
    $(".adik1").css({'z-index':'1', 'left':0.30*Number($("#adisimg").width()), 'top':-0.59*Number($("#adisimg").width()), 'margin-bottom':'-6.5em'});
    $(".adig1").css({'z-index':'1', 'left':0.43*Number($("#adisimg").width()),'top':-0.6*Number($("#adisimg").width()), 'margin-bottom':'-6.5em'});
    $(".adik2").css({'z-index':'2', 'left':0.695*Number($("#adisimg").width()), 'top':-0.5*Number($("#adisimg").width()), 'margin-bottom':'-6.5em'});
    $(".adig2").css({'z-index':'2', 'left':0.82*Number($("#adisimg").width()),'top':-0.5*Number($("#adisimg").width()), 'margin-bottom':'-6.5em'});
    $(".adik3").css({'z-index':'2', 'left':0.695*Number($("#adisimg").width()), 'top':-0.4*Number($("#adisimg").width()), 'margin-bottom':'-6.5em'});
    $(".adig3").css({'z-index':'2', 'left':0.82*Number($("#adisimg").width()),'top':-0.4*Number($("#adisimg").width()), 'margin-bottom':'-6.5em'});
    
  }

$(window).resize(function() {
  location.reload();
});
