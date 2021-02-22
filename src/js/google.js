
const a_trad_google = document.querySelector(".a-trad-google");
let active  = true;

function trad_english(){
   
    const button1 =  document.querySelector(".a-button1");
    const button2 =  document.querySelector(".a-button2");
    const input_textHolder = document.querySelector(".input-search");
    const traduc_p = document.querySelector(".trad-google");
    
    if(active){
        a_trad_google.textContent ="French";
        button1.textContent = "Google Search";
        button2.textContent = "I'm feeling lucky";
        input_textHolder.placeholder = "have a research or writte down an URL";
        traduc_p.textContent = "Google offered in :";
        active = false;
    }

    else{
        a_trad_google.textContent ="English";
        button1.textContent = "Recherche Google";
        button2.textContent = "J'ai de la chance";
        input_textHolder.placeholder = "Effectuez une recherche sur Google ou saisissez une URL";
        traduc_p.textContent = "Google disponible en :";
        active = true;
    }
}

a_trad_google.addEventListener("click", trad_english);