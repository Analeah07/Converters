function sc()
    {
        let sec_input = document.getElementById("inputSeconds").value;
        let min_input = document.getElementById("inputMinutes");
        let hr_input = document.getElementById("inputHours");

        let min = (sec_input / 60);
        min_input.value = min;
        
        let hr = (sec_input / 3600);
        hr_input.value = hr;
    }
function mins()
    {
        let sec_input = document.getElementById("inputSeconds");
        let min_input = document.getElementById("inputMinutes").value;
        let hr_input = document.getElementById("inputHours");

        let sec = (min_input * 60);
        sec_input.value = sec;
        
        let hr = (min_input / 60);
        hr_input.value = hr;
    }
function hr()
    {
        let sec_input = document.getElementById("inputSeconds");
        let min_input = document.getElementById("inputMinutes");
        let hr_input = document.getElementById("inputHours").value;

        let sec = (hr_input * 3600);
        sec_input.value = sec;
        
        let hr = (hr_input * 60);
        min_input.value = hr;
    }


function reset()
    {
      let sec_input = document.getElementById("inputSeconds").value = "";
      let min_input = document.getElementById("inputMinutes").value = "";
      let hr_input = document.getElementById("inputHours").value = "";
    }
