class Convertor {
    CToF(Variable) {
        return ((9 * Variable) / 5) + 32;
    }
    FToC(Variable) {
        return (5 * (Variable - 32)) / 9;
    }
    KToF(Variable) {
     return ((9 * (Variable - 273.15)) / 5) + 32;
    }
    FToK(Variable) {
        return ((5 * (Variable - 32)) / 9) + 273.15;
    }
    KToC(Variable) {
        return Variable - 273.15;
    }
    CToK(Variable) {
        return Variable + 273.15;
    }
    MtoCm(Variable) {
        return Variable * 100;
    }
    CmtoM(Variable) {
        return Variable / 100;
    }
    KmToM(Variable) {
        return Variable * 1000;
    }
    MToKm(Variable) {
        return Variable / 1000;
    }
    PToM(Variable) {
        return Variable * 0.3048;
    }
    MToP(Variable) {
        return Variable / 0.3048;
    }
    convertir(aConvertir, unidadActual, unidadAConvertir, medida) {
        switch (medida) {
            case 'T':
                if (unidadActual == "c" && unidadAConvertir == "f") {
                    alert("Resultado: "+this.CToF(aConvertir) + " fahrenheit");
                }
                if (unidadActual == "f" && unidadAConvertir == "c") {
                    alert("Resultado: "+this.FToC(aConvertir) + " celsius");
                }
                if (unidadActual == "k" && unidadAConvertir == "f") {
                    alert("Resultado: "+this.KToF(aConvertir) + " fahrenheit");
                }
                if (unidadActual == "f" && unidadAConvertir == "k") {
                    alert("Resultado: "+this.FToK(aConvertir) + " kelvin");
                }
                if (unidadActual == "k" && unidadAConvertir == "c") {
                    alert("Resultado: "+this.KToC(aConvertir) + " celsius");
                }
                if (unidadActual == "c" && unidadAConvertir == "k") {
                    alert("Resultado: "+this.CToK(aConvertir) + " kelvin");
                }
                break;
            case 'L':
                if (unidadActual == "m" && unidadAConvertir == "cm") {
                    alert("Resultado: "+this.MtoCm(aConvertir) + " centimetros");
                }
                if (unidadActual == "cm" && unidadAConvertir == "m") {
                    alert("Resultado: "+this.CmtoM(aConvertir) + " metros");
                }
                if (unidadActual == "km" && unidadAConvertir == "m") {
                    alert("Resultado: "+this.KmToM(aConvertir) + " metros");
                }
                if (unidadActual == "m" && unidadAConvertir == "km") {
                    alert("Resultado: "+this.MToKm(aConvertir) + " kilometros");
                }
                if (unidadActual == "p" && unidadAConvertir == "m") {
                    alert("Resultado: "+this.PToM(aConvertir) + " metros");
                }
                if (unidadActual == "m" && unidadAConvertir == "p") {
                    alert("Resultado: "+this.MToP(aConvertir) + " pies");
                }
                break;
            default:
                alert("Tipo invalido");
                break;
        }
    }
}
//"MAIN"
var convertidor= new Convertor();
convertidor.convertir(100,"m", "cm", 'L');
convertidor.convertir(32, "f", "c", 'T');