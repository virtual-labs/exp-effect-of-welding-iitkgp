/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
var ch=0;
var adib=0.0;
var x_0 = 40,y_0 = 40;
$(document).ready(function(){
    adiwe4(0);
    //$('#adidrp').text('0.0');
});


function adibtn(){
 if(adib==0){
    if(Number($('#adidrp').text())>1.1){
        adib=1;
        $("#adidrp").addClass("disabled");
        $("#stp1").show();
        $("#stp2").hide();
        $("#stp3").hide();
    }
    else{
        alert("Read the instructions and select the values from the dropdown");
    }
    
 }  
 else if(adib==1){
    adib=2;
    $("#stp1").addClass("dsbld");
    $("#stp2").show();
 } 
 else if(adib==2){
    adib=4;
    $("#stp2").addClass("dsbld");
    $("#stp3").show();
    $("#adibtn").hide();
 }
}

function adiwe4(a){
    if(a==0)
    {
        $("#grph").hide();    
        $("#adiv").hide();
        $("#adis").show();    
        $("#stp1").hide();
        $("#stp2").hide();
        $("#stp3").hide();            
        ch=0;
    }
    else
    {
        $("#grph").show();
        if(a==1){
            $("#adis").hide();
            $("#adisimg").hide();
            $("#adibtn").hide();
            $("#stp1").hide();
            $("#stp2").hide();
            $("#stp3").hide();
                $("#adiv").show();
                $("#adiv").html("<div class=\"col-sm-12\"><video width=\"100%\" autoplay muted id=\"adivid\"> <source src=\"./images/Adi3_Vid.mp4\" type=\"video/mp4\"> </video> </div>");
                    document.getElementById("adivid").onended=function(){
                $("#adiv").html("<div class=\"col-sm-12\"><img width=\"100%\" id=\"adivid\" src=\"./images/Pi2.png\" /></div>");
                adin4e(Number($("#ar1").val()),Number($("#ar2").val()),Number($("#ar3").val()),Number($('#adidrp').text()));
                adiplt(Number($("#ar1").val()),Number($("#ar2").val()),Number($("#ar3").val()),Number($('#adidrp').text()));
                }
            
        }
        else if(a==2){
            window.location.reload();
        }
    }

};

function rng(s,e,st){
    var adi=[];
    for(i=0;i<=st;i++){
        adi[i]=(s+i*(e-s)/st);
    }
    return adi;
};

function Wldg3(V,S,I,D){
  var b_w = (D**(0.4294))*(S**(-0.4590))*(I**(0.3518))*(V**(0.7083))*(10**(-0.0905));
  var b_h = (D**(-0.1255))*(S**(-0.2395))*(I**(0.6387))*(V**(-0.7183))*(10**(0.3339));
  var b_p = (D**(-0.5668))*(S**(-0.3641))*(I**(1.4005))*(V**(0.013))*(10**(-2.3098));
  return [b_w, b_h, b_p];
}

function gtcol(mat, colidx) {
  const col = [];
  for (let i = 0; i < mat.length; i++) {
    col.push(mat[i][colidx]);
  }
 return col;
}


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

function adismatdiv(rn,sca){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=sca*rn[i]/rn[i];
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

function adin4e(S, V, I, D){
var Volv=rng(20,30,100);
var Spdv=rng(25,41,100);
var Curv=rng(180,360,100);
var Diav=rng(1.2,1.6,100);  
var wb=[];
var Vdata = [];
var Sdata = [];
var Cdata = [];
var Ddata = [];
Volv.forEach(function(v) {
   wb=Wldg3(v,S,I,D);
   Vdata.push(wb);
});
var Vdtc1=gtcol(Vdata,0);
var Vdtc2=gtcol(Vdata,1);
var Vdtc3=gtcol(Vdata,2);
adipltm(Volv,Vdtc1,Vdtc2,Vdtc3,"Voltage (V)", "Effect of Voltage",1);
Curv.forEach(function(c) {
   wb=Wldg3(V,S,c,D);
    Cdata.push(wb);
});
var Cdtc1=gtcol(Cdata,0);
var Cdtc2=gtcol(Cdata,1);
var Cdtc3=gtcol(Cdata,2);
adipltm(Curv,Cdtc1,Cdtc2,Cdtc3,"Current (A)", "Effect of Current",2);
Spdv.forEach(function(s) {
   wb=Wldg3(V,s,I,D);
   Sdata.push(wb);
});
var Sdtc1=gtcol(Sdata,0);
var Sdtc2=gtcol(Sdata,1);
var Sdtc3=gtcol(Sdata,2);
adipltm(Spdv,Sdtc1,Sdtc2,Sdtc3,"Arc Speed (mm/min)", "Effect of Arc Speed",3);
Diav.forEach(function(d) {
   wb=Wldg3(V,S,I,d);
   Ddata.push(wb);
});
var Ddtc1=gtcol(Ddata,0);
var Ddtc2=gtcol(Ddata,1);
var Ddtc3=gtcol(Ddata,2);
adipltm(Diav, Ddtc1, Ddtc2, Ddtc3,"Wire Diameter (mm)", "Effect of Wire Diameter",4);
}

function adiplt(S, V, I, D){
  var bw = (D**(0.4294))*(S**(-0.4590))*(I**(0.3518))*(V**(0.7083))*(10**(-0.0905));
  var bh = (D**(-0.1255))*(S**(-0.2395))*(I**(0.6387))*(V**(-0.7183))*(10**(0.3339));
  var bp = (D**(-0.5668))*(S**(-0.3641))*(I**(1.4005))*(V**(0.013))*(10**(-2.3098));
  x_0 = 2;
  y_0 = 2;
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


  x1=rng(x_0-15, x_0+15, 1000);
  y1=adismatdiv(x1,y_0);
  x2=x1;
  y2=adismatdiv(x1,x_0-15);
  y3=rng(x_0-15, x_0, 1000);
  x3=adismatdiv(y3,x_0-15);
  x4=adismatdiv(y3,x_0+15);
  y4=rng(y_0-15, y_0, 1000);

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
    var lay={
        title: {text: 'Weld Bead Geometry'},
        showlegend: true,
    legend: {
      x: 1,
      xanchor: 'right',
      y: 1
    },
    font: {
        size: 15,
        color: 'blue'
        },
    xaxis: {
        title:{text: 'Plate Width (mm)'},
        showticklabels: true,
        autotick: true,
        showgrid: true,
        gridcolor: '#bdbdbd',
        gridwidth: 0,
        linecolor: '#636363',
        linewidth: 1,
        mirror: 'ticks',
        range:[-20,20]
         },
    yaxis: {
        title:{text: 'Plate Thickness (mm)'},
        showticklabels: true,
        autotick: true,
        linecolor: '#636363',
        linewidth: 1,
        mirror: 'ticks',
        range:[-20,20]
        }
    };
    Plotly.newPlot('grph5', gda, lay);

};


function adipltm(Xv,Yv1,Yv2,Yv3,Xlbl,titl,grp){
var g1 = {
        x: Xv,
        y: Yv1,
        type: 'scatter',
        name: 'Weld Width'
    };
var g2 = {
        x: Xv,
        y: Yv2,
        yaxis: 'y2',
        type: 'scatter',
        name: 'Weld Height'
    };
var g3 = {
        x: Xv,
        y: Yv3,
        yaxis: 'y3',
        type: 'scatter',
        name: 'Weld Penetration'
    };

var gd=[g1,g2,g3];

var lat={ 
    height:410,
     title: {
    text: titl,
    font: {color: '#1f77b4'}

  },

  xaxis: {domain: [0.0, 0.6],
    title: {
      text: Xlbl,
      font: {color: '#1f77b4'}
        }
    },

  yaxis: {
    title: {
      text: 'Weld Width (mm)',
      font: {color: '#1f77b4'}
    },
    tickfont: {color: '#1f77b4'}
  },
  yaxis2: {

    title: {
      text: 'Weld Height (mm)',
      font: {color: '#ff7f0e'}
    },

    tickfont: {color: '#ff7f0e'},
    anchor: 'x',
    overlaying: 'y',
    side: 'right'
  },

  yaxis3: {
    title: {
      text: 'Weld Penetration (mm)',
      font: {color: '#9467bd'}
    },

    tickfont: {color: '#9467bd'},
    anchor: 'free',
    overlaying: 'y',
    side: 'right',
    position: 0.85
  }
};
if(grp==1){Plotly.newPlot("grph1", gd, lat);}
else if(grp==2){Plotly.newPlot("grph2", gd, lat);}
else if(grp==3){Plotly.newPlot("grph3", gd, lat);}
else if(grp==4){Plotly.newPlot("grph4", gd, lat);}
}