	$(function () { 
	timer();
	setInterval('timer()',1000);
    });
	
	
	function timer(){
	
	var html = $( "#contenedor" ).html();
	$( "#contenedor" ).empty();
	$( "#contenedor" ).append( html);
	var tiempo = new Date();
	var day = tiempo.getDate();
	var hora = tiempo.getHours();
	var minuto = tiempo.getMinutes();
	var segundo = tiempo.getSeconds(); 	
	
	
	if(day === 12){	
	var hora = " "+ 39 - hora+" ";
	}else{
	var hora = " "+ 15 - hora+" ";
	}
	
	var minutos = " "+59 - minuto+" ";
	var segundos = " "+59 - segundo+" ";
	var primerDigitoHora = hora.substring(0,1);
	var segundoDigitoHora = hora.substring(1,2);
	var primerDigitoMinutos = minutos.substring(0,1);
	var segundoDigitoMinutos = minutos.substring(1,2);
	var primerDigitoSegundos = segundos.substring(0,1);
	var segundoDigitoSegundos = segundos.substring(1,2);

	
        $( "#horasT" ).empty();
        $( "#horasO" ).empty();
        $( "#minutosT" ).empty();
        $( "#minutosO" ).empty();
        $( "#segundosT" ).empty();
        $( "#segundosO" ).empty();
	
	$( "#horasT" ).append( "<span class='digit'>0</span>" );
	$( "#horasO" ).append( "<span class='digit'>0</span>" );
	$( "#minutosT" ).append( "<span class='digit'>0</span>" );
	$( "#minutosO" ).append( "<span class='digit'>0</span>" );
	$( "#segundosT" ).append( "<span class='digit'>0</span>" );
	$( "#segundosO" ).append( "<span class='digit'>0</span>" );
	
	

	if( Number(hora) < 10){
	$( "#horasT" ).append( "<span class='digit'>"+0+"</span>" );
	$( "#horasO" ).append( "<span class='digit'>"+primerDigitoHora+"</span>" );
	}else{
	$( "#horasT" ).append( "<span class='digit'>"+primerDigitoHora+"</span>" );
	$( "#horasO" ).append( "<span class='digit'>"+segundoDigitoHora+"</span>" );
	}	
	
	if( Number(minutos) < 10){
	$( "#minutosT" ).append( "<span class='digit'>"+0+"</span>" );
	$( "#minutosO" ).append( "<span class='digit'>"+primerDigitoMinutos+"</span>" );
	}else{
	$( "#minutosT" ).append( "<span class='digit'>"+primerDigitoMinutos+"</span>" );
	$( "#minutosO" ).append( "<span class='digit'>"+segundoDigitoMinutos+"</span>" );
	}
	
	if( Number(segundos) < 10) {
	$( "#segundosT" ).append( "<span class='digit'>"+0+"</span>" );
	$( "#segundosO" ).append( "<span class='digit'>"+primerDigitoSegundos+"</span>" );
	}else{
	$( "#segundosT" ).append( "<span class='digit'>"+primerDigitoSegundos+"</span>" );
	$( "#segundosO" ).append( "<span class='digit'>"+segundoDigitoSegundos+"</span>" );
	}
	};