function cm()
    {
        let cm_input = document.getElementById("inputcentimeters").value;
        let inch_input = document.getElementById("inputInches");
        let ft_input = document.getElementById("inputFeet");
        let yrd_input = document.getElementById("inputYards");
        let mtr_input = document.getElementById("inputMeters");
        let km_input = document.getElementById("inputKilometers");

        let inch = (cm_input / 2.54);
        inch_input.value = inch;
        
        let ft = (cm_input / 30.48);
        ft_input.value = ft;

        let yrd = (cm_input / 91.44);
        yrd_input.value = yrd;

        let mt = (cm_input / 100);
        mtr_input.value = mt;

        let km = (cm_input / 1e+5);
        km_input.value = km;
    }
function inch()
    {
        let cm_input = document.getElementById("inputcentimeters");
        let inch_input = document.getElementById("inputInches").value;
        let ft_input = document.getElementById("inputFeet");
        let yrd_input = document.getElementById("inputYards");
        let mtr_input = document.getElementById("inputMeters");
        let km_input = document.getElementById("inputKilometers");

        let cm = (inch_input * 2.54);
        cm_input.value = cm;
        
        let ft = (inch_input / 12);
        ft_input.value = ft;

        let yrd = (inch_input / 36);
        yrd_input.value = yrd;

        let mt = (inch_input / 39.37);
        mtr_input.value = mt;

        let km = (inch_input / 39370);
        km_input.value = km;
    }
function ft()
    {
        let cm_input = document.getElementById("inputcentimeters");
        let inch_input = document.getElementById("inputInches");
        let ft_input = document.getElementById("inputFeet").value;
        let yrd_input = document.getElementById("inputYards");
        let mtr_input = document.getElementById("inputMeters");
        let km_input = document.getElementById("inputKilometers");

        let cm = (ft_input * 30.48);
        cm_input.value = cm;
        
        let inch = (ft_input * 12);
        inch_input.value = inch;

        let yrd = (ft_input / 3);
        yrd_input.value = yrd;

        let mt = (ft_input / 3.281);
        mtr_input.value = mt;

        let km = (ft_input / 3281);
        km_input.value = km;
    }
function yrd()
    {
        let cm_input = document.getElementById("inputcentimeters");
        let inch_input = document.getElementById("inputInches");
        let ft_input = document.getElementById("inputFeet");
        let yrd_input = document.getElementById("inputYards").value;
        let mtr_input = document.getElementById("inputMeters");
        let km_input = document.getElementById("inputKilometers");

        let cm = (yrd_input * 91.44);
        cm_input.value = cm;
        
        let inch = (yrd_input * 36);
        inch_input.value = inch;

        let ft = (yrd_input * 3);
        ft_input.value = ft;

        let mt = (yrd_input / 1.094);
        mtr_input.value = mt;

        let km = (yrd_input / 1094);
        km_input.value = km;
    }
function mtr()
    {
        let cm_input = document.getElementById("inputcentimeters");
        let inch_input = document.getElementById("inputInches");
        let ft_input = document.getElementById("inputFeet");
        let yrd_input = document.getElementById("inputYards");
        let mtr_input = document.getElementById("inputMeters").value;
        let km_input = document.getElementById("inputKilometers");

        let cm = (mtr_input * 100);
        cm_input.value = cm;
        
        let inch = (mtr_input * 39.37);
        inch_input.value = inch;

        let ft = (mtr_input * 3.281);
        ft_input.value = ft;

        let yrd = (mtr_input * 1.094);
        yrd_input.value = yrd;

        let km = (mtr_input / 1000);
        km_input.value = km;
    }
function km()
    {
        let cm_input = document.getElementById("inputcentimeters");
        let inch_input = document.getElementById("inputInches");
        let ft_input = document.getElementById("inputFeet");
        let yrd_input = document.getElementById("inputYards");
        let mtr_input = document.getElementById("inputMeters");
        let km_input = document.getElementById("inputKilometers").value;

        let cm = (km_input * 1e+5);
        cm_input.value = cm;
        
        let inch = (km_input * 39370);
        inch_input.value = inch;

        let ft = (km_input * 3281);
        ft_input.value = ft;

        let yrd = (km_input * 1094);
        yrd_input.value = yrd;

        let mtr = (km_input * 1000);
        mtr_input.value = mtr;
    }

function reset()
    {
        let cm_input = document.getElementById("inputcentimeters").value = "";
        let inch_input = document.getElementById("inputInches").value = "";
        let ft_input = document.getElementById("inputFeet").value = "";
        let yrd_input = document.getElementById("inputYards").value = "";
        let mtr_input = document.getElementById("inputMeters").value = "";
        let km_input = document.getElementById("inputKilometers").value = "";
    }
