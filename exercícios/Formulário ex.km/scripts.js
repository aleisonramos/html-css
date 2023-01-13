date = new Date();
year = date.getFullYear();
month = (date.getMonth() + 1).toString().padStart(2, '0')
day = date.getDate().toString().padStart(2, '0')
document.getElementById("current_date").value = year + "-" + month + "-" + day;

function validarFormulario() {
   
    var nomePessoa = document.forms["formCadastro"]["nome"].value;
    var data1 = document.forms["formCadastro"]["datainicio"].value;
    var data2 = document.forms["formCadastro"]["datapro"].value;
    var data3 = document.forms["formCadastro"]["dataint"].value;
    const medalha40 = document.forms["formCadastro"]["40anos"];
    const medalha30 = document.forms["formCadastro"]["30anos"];
    const medalha20 = document.forms["formCadastro"]["20anos"];
    const medalha15 = document.forms["formCadastro"]["15anos"];
    const medalha10 = document.forms["formCadastro"]["10anos"];
    const medalha5 = document.forms["formCadastro"]["5anos"];

    // Convertendo a data
    dia = data1.substr(8, 2);
    mes = data1.substr(5, 2);
    ano = data1.substr(0, 4);
    dia2 = data2.substr(8, 2);
    mes2 = data2.substr(5, 2);
    ano2 = data2.substr(0, 4);

    var z = new Date(Date.parse(ano + "/" + mes + "/" + dia));
    var x = new Date(Date.parse(ano2 + "/" + mes2 + "/" + dia2));
    var x1 = data3 * 30;
    var dias = 1000 * 60 * 60 * 24;
    var c = parseInt(z.getTime() - x.getTime());
    var d = (c / dias);
    var numero = parseInt(x1);
    if (Number.isNaN(numero)) numero = 0;
    const diasContribuidos = d - numero;
    const anosContribuidos = diasContribuidos / 365
    
    if (diasContribuidos >= 14600 && !medalha40.checked) {
        window.location.href = "./pages/40anos.html"
        return false;
    }
    else if (diasContribuidos >= 10950 && diasContribuidos < 14600 && !medalha30.checked) {
        window.location.href = "./pages/30anos.html"
        return false;
    }
    else if (diasContribuidos >= 7300 && diasContribuidos < 10950 && !medalha20.checked) {
        window.location.href = "./pages/20anos.html"
        return false;
    }
    else if (diasContribuidos >= 5475 && diasContribuidos < 7300 && !medalha15.checked) {
        window.location.href = "./pages/15anos.html"
        return false;
    }
    else if (diasContribuidos >= 3675 && diasContribuidos < 5475 && !medalha10.checked) {
        window.location.href = "./pages/10anos.html"
        return false;
    }
    else if (diasContribuidos >= 1825 && diasContribuidos < 3675 && !medalha5.checked) {
        window.location.href = "./pages/5anos.html"
        return false;
    } else {
        window.location.href = "./pages/resultado2.html"
        return false;
    }
    
}
