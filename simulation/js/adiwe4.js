/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
var ch=0;
var x_0 = 40,y_0 = 40;
$(document).ready(function(){
    adiwe4(0);
});

function rng(s,e,st){
    var adi=[];
    for(i=0;i<=st;i++){
        adi[i]=(s+i*(e-s)/st);
    }
    return adi;
};

function adiwe4(a){
    if(a==0)
    {
        $("#grph").hide();    
        ch=0;
    }
    else
    {
        $("#grph").show();
        if(a==1){
            //adiplt(Number($("#av").val()),Number($("#as").val()),Number($("#ac").val()),Number($("#ad").val()));
            if(Number($("#av").val())>15 && Number($("#av").val())<22 || Number($("#as").val())>0.2 && Number($("#as").val())<0.6 || Number($("#ad").val())>319 && Number($("#ad").val())<401 ){
                adiplt(Number($("#av").val()),Number($("#as").val()),Number($("#ac").val()),Number(2));
            }
            else
            {
                $("#grph").hide();
                $('#inst').show();
                $('#av').val('');
                $('#ad').val('');    
                $('#ac').val('');
                $('#as').val('');
            ch=0;
                alert("Read the instructions and enter the right values");
            }
        }
        else if(a==2){
            $("#grph").hide();
            $('#inst').show();
            $('#av').val('');
            $('#ad').val('');    
            $('#ac').val('');
            $('#as').val('');
            ch=0;
        }
    }

};

function adimul(muf,rn){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=muf*rn[i]/rn[i];
    }
    return res;
};

function adimatmul(rn,mul){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=Math.pow(rn[i],mul);
    }
    return res;
};

function adismatmul(sca,rn){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=sca*rn[i];
    }
    return res;
};

function adismatsum(rn,sca){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=sca+rn[i];
    }
    return res;
};

function adimatsum(rn1,rn2){
    var res=[];
    for(i=0;i<=rn1.length;i++){
        res[i]=rn2[i]+rn1[i];
    }
    return res;
};

function adiplt(v, s, i, h){
  bw = 12.202+(i*0.0746)+(0.2196*h)+(0.0436*v)-(48.517*s);
  bh = -1.059+(0.016*i)+(0.1296*h)+(0.028*v)-(9.033*s);
  bp = 16.403-(0.002*i)-(0.173*h)-(0.112*v)-(9.287*s);
 
  x_0 = 40;
  y_0 = 40;
  xa = rng((x_0-(bw/2)), (x_0+(bw/2)), 1000);
  xa2=adimatmul(xa,2);
  // equation for upper curve
    A = -((4*bh)/Math.pow(bw,2));
    B = ((8*bh*x_0)/Math.pow(bw,2));
    C =  (((bh*Math.pow(bw,2)))+(y_0*Math.pow(bw,2))-(4*bh*(Math.pow(x_0,2))))/Math.pow(bw,2);
    y_up =adismatsum(adimatsum(adismatmul(A,xa2),adismatmul(B,xa)),C);
//# equation for Lower curve
    A = ((4*bp)/Math.pow(bw,2));
    B = -((8*bp*x_0)/Math.pow(bw,2));
    C =  -(((bp*Math.pow(bw,2)))-(y_0*Math.pow(bw,2))-(4*bp*(Math.pow(x_0,2))))/Math.pow(bw,2);
    y_down =adismatsum(adimatsum(adismatmul(A,xa2),adismatmul(B,xa)),C);


  x1=rng(20, 60, 1000);
  y1=adimul(20,x1);
  x2=rng(20, 60, 1000);
  y2=adimul(40,x1);
  y3=rng(20, 40, 1000);
  x3=adimul(20,y3);
  y4=rng(20, 40, 1000);
  x4=adimul(60,y3);

var g1 = {
        x: xa,
        y: y_up,
        type: 'scatter',
        name: 'Reinforcement Zone'
    };
var g2 = {
        x: xa,
        y: y_down,
        type: 'scatter',
        name: 'Penetration Zone'
    };
var g3 = {
        x: x1,
        y: y1,
        type: 'scatter',
        showlegend:false
    };
var g4 = {
        x: x2,
        y: y2,
        type: 'scatter',
        showlegend:false
    };
var g5 = {
        x: x3,
        y: y3,
        type: 'scatter',
        showlegend:false
    };
var g6 = {
        x: x4,
        y: y4,
        type: 'scatter',
        showlegend:false
    };
    
var gda = [g1,g2,g3,g4,g5,g6];

    var gr = document.getElementById('grph');
    var layout={title: 'Weld Bead Geometry',showlegend: true,
    legend: {
      x: 1,
      xanchor: 'right',
      y: 1
    },
    font: {
        family: 'Courier New, monospace',
        size: 15,
        color: 'black'
        },
    xaxis: {
        title:'Plate Width (mm)',
        showticklabels: true,
        autotick: true,
        showgrid: true,
        gridcolor: '#bdbdbd',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 3,
        linecolor: '#636363',
        linewidth: 1,
        zeroline: true,
        showline: true,
        mirror: 'ticks',
        range:[10,70]
         },
    yaxis: {
        title:'Plate Thickness (mm)',
        showticklabels: true,
        autotick: true,
        showgrid: true,
        gridcolor: '#bdbdbd',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 3,
        linecolor: '#636363',
        linewidth: 1,
        zeroline: true,
        showline: true,
        mirror: 'ticks',
        range:[10,50]
        }
    };
    Plotly.newPlot(gr, gda, layout);
};