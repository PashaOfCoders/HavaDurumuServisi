//Furkan PAŞAOĞLU
$(document).ready(function(){
    $("#rapor").click(function(){
        
		
		for(i =0; i< obj.array.length;i++){
			
		var sehir = obj.array[i];
		
        var key = 'a180e7708a808705d55af016ca58f45e';

        $.ajax({
            url:'http://api.openweathermap.org/data/2.5/weather',
            dataType:'json',
            type:'GET',
            data:{ q:sehir, appid: key, units: 'metric'},

            success: function(data){


                var wf = '';
                $.each(data.weather, function(index, val){


                    wf += '<p><b>' + data.name + " " +data.sys.country + "</b><img src=icon/"+ val.icon + ".png></p>"+
                    data.main.temp + '&deg;C' + ' | ' + val.main + ", " +
                    val.description + "<br><br>"

                });
				$("#myTable").find('tbody').append(wf);
			}
        });
	
		}


    });
}); 

$(document).ready(function(){
    $("#belirli").click(function(){
		
		
		
		for(var j =0; j< obj.array.length;j++){
		
        var sehir = obj.array[j];
        var key = 'a180e7708a808705d55af016ca58f45e';
		
		if(j == (obj.array.length - 1))
			alert("Sunucudan gerekli bilgiler çekiliyor bekleyiniz...");
		
		
        $.ajax({
            url:'http://api.openweathermap.org/data/2.5/forecast',
            dataType:'json',
            type:'GET',
            data:{ q:sehir, appid: key, units: 'metric'},

            success: function(data){
				
					var wf = ' ';					
					wf += '<hr>' ;
					
				$.each(data.list, function(index, val){
					
                    wf += '<p><b>' + data.city.name +' '+ val.main.temp + '&deg;C'  + ' | ' + 
                    val.dt_txt + ' ' + '<br><br>'  

                });


                var bosluksay = new Array();

                bosluksay = wf.split(' ');          
                
                for(var i=0;i<163;i++){
					
                    if(i<26){
                        elem = document.getElementById('belirli1');
                        elem.innerHTML += ' ';
                        elem.innerHTML += bosluksay[i];  
                    }else if(i>=26&&i<46){
                        elem = document.getElementById('belirli2');
                        elem.innerHTML += ' ';
                        elem.innerHTML += bosluksay[i];
                    }else if(i>=46&&i<66){
                        elem = document.getElementById('belirli3');
                        elem.innerHTML += ' ';
                        elem.innerHTML += bosluksay[i];
                    }else if(i>=66&&i<86){
                        elem = document.getElementById('belirli4');
                        elem.innerHTML += ' ';
                        elem.innerHTML += bosluksay[i];
                    }else if(i>=86&&i<106){
                        elem = document.getElementById('belirli5');
                        elem.innerHTML += ' ';
                        elem.innerHTML += bosluksay[i];
                    }else if(i>=106&&i<126){
                        elem = document.getElementById('belirli6');
                        elem.innerHTML += ' ';
                        elem.innerHTML += bosluksay[i];
                    }else if(i>=126&&i<146){
                        elem = document.getElementById('belirli7');
                        elem.innerHTML += ' ';
                        elem.innerHTML += bosluksay[i];
                    }else if(i>=146&&i<163){
                        elem = document.getElementById('belirli8');
                        elem.innerHTML += ' ';
                        elem.innerHTML += bosluksay[i];
					}

                }

					
                /*  $("#belirli").html(wf.substr(0,200));*/

            }

        });
		
		}
		
    });
}); 



var i = 0;
var obj = { "array":[] };
$(document).ready(function(){
		
    $("#ekle").click(function(){
        if($("#il").val() !=""){
		obj.array[i] = $("#il").val();
		i++;
		$("#il").val("");
		alert("Şehir Eklendi!!");
		
	}
	else{alert("Lütfen Bir Şehir Giriniz!");}

    });
}); 