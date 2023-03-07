function ml()
    {
        let ml_input = document.getElementById("inputMilligrams").value;
        let gr_input = document.getElementById("inputGrams");
        let kl_input = document.getElementById("inputKilograms");

        let gr = (ml_input / 1000);
        gr_input.value = gr;
        
        let kl = (ml_input / 1e+6);
        kl_input.value = kl;
    }
function gr()
    {
        let ml_input = document.getElementById("inputMilligrams");
        let gr_input = document.getElementById("inputGrams").value;
        let kl_input = document.getElementById("inputKilograms");

        let ml = (gr_input * 1000);
        ml_input.value = ml;
        
        let kl = (gr_input / 1000);
        kl_input.value = kl;
    }
function kl()
    {
        let ml_input = document.getElementById("inputMilligrams");
        let gr_input = document.getElementById("inputGrams");
        let kl_input = document.getElementById("inputKilograms").value;

        let ml = (kl_input * 1e+6);
        ml_input.value = ml;
        
        let gr = (kl_input * 1000);
        gr_input.value = gr;
    }
function reset()
    {
        let ml_input = document.getElementById("inputMilligrams").value = "";
        let gr_input = document.getElementById("inputGrams").value = "";
        let kl_input = document.getElementById("inputKilograms").value = "";                                                            
    }
