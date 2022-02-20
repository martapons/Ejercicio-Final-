let valoracionSelector;
let valoracion_actual;
let singleton ={

    forms:{
        form1:""
    }
}


document.addEventListener("DOMContentLoaded", function(){
    valoracionSelector = document.getElementById('Valoracion');
    valoracion_actual = document.getElementById('valoracion_actual');
    entradacp = document.getElementById('entradacp');
    salidaprovincia = document.getElementById('salidaprovincia');

    entradacp.addEventListener('change', (event) => {
    console.log(event.target.value); 
    entradacp.value = event.target.value;
    darProvincia(entradacp.value );
    });

    salidaprovincia.addEventListener('change', (event) => {
    console.log(event.target.value); 
    salidaprovincia.value = event.target.value;
  
    });

});


function darProvincia(cpostal) {
    var cp_provincias = {
      "01": "Álava", "02": "Albacete", "03": "Alicante", "04": "Almería", "05": "Ávila",
      "06": "Badajoz", "07": "Baleares", "08": "Barcelona", "09": "Burgos", "10": "Cáceres",
      "11": "Cádiz", "12": "Castellón", "13": "Ciudad Real", "14": "Córdoba", "15": "Coruña",
      "16": "Cuenca", "17": "Gerona", "18": "Granada", "19": "Guadalajara", "20": "Guipúzcoa",
      "21": "Huelva", "22": "Huesca", "23": "Jaén", "24": "León", "25": "Lérida",
      "26": "La Rioja", "27": "Lugo", "28": "Madrid", "29": "Málaga", "30": "Murcia",
      "31": "Navarra", "32": "Orense", "33": "Asturias", "34": "Palencia", "35": "Las Palmas",
      "36": "Pontevedra", "37": "Salamanca", "38": "Santa Cruz de Tenerife", "39": "Cantabria", "40": "Segovia",
      "41": "Sevilla", "42": "Soria", "43": "Tarragona", "44": "Teruel", "45": "Toledo",
      "46": "Valencia", "47": "Valladolid", "48": "Vizcaya", "49": "Zamora", "50": "Zaragoza",
      "51": "Ceuta", "52": "Melilla"
    }
  let cpostalInt= parseInt(cpostal);

  if (cp_provincias.hasOwnProperty(cpostal.substring(0, 2))) {
   console.log( cp_provincias[cpostal.substring(0, 2)]);
       document.getElementById('salidaprovincia').value =  cp_provincias[cpostal.substring(0, 2)];
        correct = document.getElementById('da-correct');
        correct.innerHTML = ('¡Los datos son correctos!');
        correct.style.color = 'green';
         
       error = document.getElementById('da-error');
       error.innerHTML = ('');
  } else if (cpostal.length == 5 && cpostalInt <= 52999 && cpostalInt >= 1000 || cpostal == "" || !(cp_provincias.hasOwnProperty(cpostal.substring(0, 2)))) {
    error = document.getElementById('da-error');
    error.innerHTML = ('¡Introduzca un código postal válido!');
    error.style.color = 'red';
  }
  


  
  

};

function mostrarValoracion(){
    alert('Ha valorado con '+ 
    valoracionSelector.value);
}

function changeValoracion(){
    
    valoracion_actual.innerHTML = valoracionSelector.value;
}

function mostrarCuenta(){

     singleton.forms.form1 =
     {
        pais: document.getElementById('pais').value,
        iban: document.getElementById('iban').value,
        entidad: document.getElementById('entidad').value,
        sucursal: document.getElementById('sucursal').value,
        dc: document.getElementById('dc').value,
        cuenta: document.getElementById('cuenta').value,

    }


    alert('Le informamos que su cuenta bancaria es '+
    singleton.forms.form1.pais+
    singleton.forms.form1.iban+'-'+
    singleton.forms.form1.entidad+'-'+
    singleton.forms.form1.sucursal+'-'+
    singleton.forms.form1.dc+'-'+
    singleton.forms.form1.cuenta);
}

function mostrarDiaSemana(){

    var fecha = new Date(); 

    var semana0 = "La fecha seleccionada es domingo."; 
    var semana1 = "La fecha seleccionada es lunes."; 
    var semana2 = "La fecha seleccionada es martes."; 
    var semana3 = "La fecha seleccionada es miércoles."; 
    var semana4 = "La fecha seleccionada es jueves."; 
    var semana5 = "La fecha seleccionada es viernes."; 
    var semana6 = "La fecha seleccionada es sábado."; 

    var hoy = fecha.getDay(); 
    alert(eval("semana" + hoy));
};
