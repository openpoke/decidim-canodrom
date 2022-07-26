// 'use strict'

var items = [
    {
      type: "text",
      title: "Quin nom té aquesta sala?",
      description: "<label class='form-control'><input type='radio' class=tsr name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Top Secret Rosies</b><br><br>És el nom que se li dóna a un grup de dones que,  \
                     a l’any 1942, en el moment àlgid de la Segona Guerra Mundial, van ser contractades per l’exercit  \
                     Estadounidense per programar un dels primers ordinadors de la historia, l’anomenat ENIAC.'>Top Secret Rosies<br></label> \
                     <label class='form-control'><input type='radio' class=tsr name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Bell Hooks</br></label> \
                     <label class='form-control'><input type='radio' class=tsr name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Hipàtia d'Alexandria<br></label> \
                     <br><div id='tsr'></div>" ,
       position: {
          left: 255,
          top: 150
        }
    },
    {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description: "<label class='form-control'><input type='radio' class=bh name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Margarita Salas</br></label> \
                     <label class='form-control'><input type='radio' class=bh name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Kamal Ramadive<br></label> \
                     <label class='form-control'><input type='radio' class=bh name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Bell Hooks</b><br><br>Gloria Jean Watkins, \
                     coneguda pel nom de ploma bell hooks, va ser una escriptora i activista feminista estatunidenca. \
                     Principalment va centrar el seu treball des d&#39;una perspectiva feminista i afroamericana, i va tractar \
                     temes de raça, classe, del gènere en l&#39;educació, l&#39;art, la història, la sexualitat, \
                     els mitjans de comunicació de massa, i el feminisme.'>Bell Hooks<br></label> \
                     <br><div id='bh'></div>" ,
        position: {
          left: 475,
          top: 120
        }
      },
      {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description: "<label class='form-control'><input type='radio' class=ha name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Margarita Salas</br></label> \
                      <label class='form-control'><input type='radio' class=ha name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Hipàtia d&#39;Alexandria</b><br><br>Va ser una filòsofa, \
                      astrònoma i matemàtica hel·lenística neoplatònica d&#39;Alexandria, a la província romana d&#39;Orient d&#39;Egipte. Era una de les ments més brillants de l&#39;escola neoplatònica \
                      de la ciutat, on donava classes de filosofia i astronomia. Era una mestra de gran renom, famosa pels seus savis consells.'>Hipàtia d&#39;Alexandria<br></label> \
                      <label class='form-control'><input type='radio' class=ha name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Ursula K. Le Guin<br></label> \
                      <br><div id='ha'></div>" ,
        position: {
          left: 540,
          top: 120
        }
      },
      {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description: "<label class='form-control'><input type='radio' class=wmm name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Wangari Muta Maathai</b><br><br>Va ser una activista \
                     política i ecologista kenyana. El 2004 va rebre el Premi Nobel de la Pau per &#34;les seves contribucions al desenvolupament sostenible, a la democràcia i a la pau&#34;. \
                     Era la primera dona africana que rebia aquest guardó i la primera dona que va ser catedràtica en el seu país. '>Wangari Muta Maathai<br></label> \
                     <label class='form-control'><input type='radio' class=wmm name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Donna Haraway</br></label> \
                     <label class='form-control'><input type='radio' class=wmm name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Idealisa Bonnelly<br></label> \
                     <br><div id='wmm'></div>" ,
        position: {
          left: 615,
          top: 120
        }
      },
      {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description: "<label class='form-control'><input type='radio' class=hl name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Ada Lovelace<br></label> \
                      <label class='form-control'><input type='radio' class=ms name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>María Teresa Ruiz<br></label> \
                      <label class='form-control'><input type='radio' class=hl name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Hedy Lamarr</b><br><br>Va ser una inventora, actriu i productora austríaca\
                      i dels Estats Units. Des del seu debut en el cinema europeu va treballar amb cineastes molt coneguts. \
                      Durant la Segona Guerra Mundial, amb 27 anys va registrar, juntament amb George Antheil, la patent d&#39;un sistema \
                      secret de transmissions de ràdio que permetia saltar entre 88 freqüències diferents, fent impossible la detecció per l&#39;enemic de l&#39;atac submarí.'>Hedy Lamarr</br></label> \
                      <br><div id='hl'></div>" ,
        position: {
          left: 687,
          top: 120
        }
      },
      {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description: "<label class='form-control'><input type='radio' class=ms name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Margarita Salas</b><br><br> Va ser una bioquímica espanyola \
                      presidenta de la Fundación Carmen y Severo Ochoa. Va publicar més de 250 treballs científics al llarg de la seva vida. Junt amb el seu marit, \
                      treballaren en el camp de la bioquímica i la biologia molecular. Fins a la seva mort fou &#34;Professora vinculada ad honorem&#34; del Consell \
                      Superior d&#39;Investigacions Científiques.'>Margarita Salas<br></label> \
                      <label class='form-control'><input type='radio' class=ms name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Malala Yousafzai</br></label> \
                      <label class='form-control'><input type='radio' class=ms name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Wangari Muta Maathai<br></label> \
                      <br><div id='ms'></div>" ,
        position: {
          left: 787,
          top: 120
        }
      },
      {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description: "<label class='form-control'><input type='radio' class=uklg name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Wangari Muta Maathai</br></label> \
                      <label class='form-control'><input type='radio' class=uklg name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Hipàtia d'Alexandria<br></label> \
                      <label class='form-control'><input type='radio' class=uklg name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Ursula K. Le Guin</b><br><br>Va ser una escriptora estatunidenca \
                      de ciència-ficció i fantasia però també de poesia, llibres infantils i assajos; també va traduir obres d&#39;altres autors. \
                      La seva fama es deu als nombrosos llibres i contes de ciència-ficció i fantasia publicats al llarg de la seva àmplia carrera \
                      amb diversos premis Hugo, Nébula i finalista al Premi Pulitzer d&#39;Obres de Ficció.'>Ursula K. Le Guin<br></label> \
                      <br><div id='uklg'></div>" ,
        position: {
          left: 1060,
          top: 165
        }
      },
      {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description: "<label class='form-control'><input type='radio' class=arr name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Bell Hooks</br></label> \
                      <label class='form-control'><input type='radio' class=arr name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Angela Ruiz Robles</b><br><br>Va ser una mestra, escriptora i inventora espanyola, \
                      precursora del llibre electrònic (ebook). Entre 1944 i 1949 realitza diversos projectes. El 1944, l&#39atles cientificogramatical, amb la finalitat de donar a conèixer \
                      l&#39;estat espanyol, amb gramàtica, sintaxi, morfologia, ortografia i fonètica. Després, la màquina taquimecanogràfica. El 1949, l&#39;enciclopèdia mecànica, \
                      construïda al Parc d&#39;Artilleria de Ferrolella, ella mateixa en va dirigir els treballs.'>Angela Ruiz Robles<br></label> \
                      <label class='form-control'><input type='radio' class=arr name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Hipàtia d'Alexandria<br></label> \
                      <br><div id='arr'></div>" ,
        position: {
          left: 255,
          top: 450
        }
      },
      {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description: "<label class='form-control'><input type='radio' class=ib name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Idealisa Bonnelly</b><br><br>És una bióloga marina \
                    dominicana considerada la &#34;madre de la conservación marina en el Caribe&#34;, fundadora del estudio de la biología en la República Dominicana, \
                    así como del Instituto de Biología Marina y de la Fundación Dominicana para la Investigación Marina. Fue instrumental \
                    en la creación del primer Santuario de Ballenas Jorobadas del Atlántico Norte y ha ganado numerosos premios, \
                    incluyendo la Medalla Marie Curie de la Unesco.'>Idealisa Bonnelly<br></label> \
                    <label class='form-control'><input type='radio' class=ib name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Bell Hooks</br></label> \
                    <label class='form-control'><input type='radio' class=ib name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Hipàtia d'Alexandria<br></label> \
                    <br><div id='ib'></div>" ,
        position: {
          left: 255,
          top: 750
        }
      },
      {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description: "<label class='form-control'><input type='radio' class=dh name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Dona Haraway</br></label> \
                      <label class='form-control'><input type='radio' class=dh name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Hipàtia d'Alexandria<br></label> \
                      <label class='form-control'><input type='radio' class=dh name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Kamal Ramadive</b><br><br>Va ser una investigadora \
                      biomèdica índia coneguda per la seva recerca sobre el càncer i els vincles entre càncers i virus. Va ser membre fundadora \
                      de l&#39;Associació de Dones Científiques de l&#39Índia. En la dècada de 1960, va establir el primer laboratori de recerca de cultius de \
                      teixits de l&#39;Índia en el Centre de Recerca del Càncer de l&#39;Índia en Mumbai.'>Kamal Ramadive<br></label> \
                      <br><div id='dh'></div>" ,
        position: {
          left: 455,
          top: 690
        }
      },
      {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description: "<label class='form-control'><input type='radio' class=mtr name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Bell Hooks</br></label> \
                     <label class='form-control'><input type='radio' class=mtr name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Hipàtia d'Alexandria<br></label> \
                     <label class='form-control'><input type='radio' class=mtr name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>María Teresa Ruiz</b><br><br>És una astrònoma xilena, \
                     Premi Nacional de Ciències Exactes 1997 i presidenta de l&#39;Acadèmia Xilena de Ciències. Especialitzada en l&#39;estudi de les estrelles nanes \
                     de baixa massa, ha descobert una supernova anomenada Kelu al moment d&#39;xplotar dues nebuloses planetàries a l&#39;halo de la nostra galàxia \
                     i la nana marró en les proximitats del sistema solar. '>María Teresa Ruiz<br></label> \
                     <br><div id='mtr'></div>" ,
        position: {
          left: 505,
          top: 690
        }
      },
      {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description:  "<label class='form-control'><input type='radio' class=kr name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Dona Haraway</b><br><br>És una biòloga \
                      i filòsofa estatunidenca. El seu assaig &#34;Manifest per a ciborgs&#34; (1985) ha estat una influent contribució als estudis \
                      de la ciència, el socialisme-feminisme i el postmodernisme. La seva obra crida a repensar les relacions humà-animal i humà-màquina, \
                      i ha generat debat tant en les ciències naturals com en les socials. '>Dona Haraway<br></label> \
                      <label class='form-control'><input type='radio' class=kr name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Bell Hooks</br></label> \
                      <label class='form-control'><input type='radio' class=kr name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Hipàtia d'Alexandria<br></label> \
                      <br><div id='kr'></div>" ,
                      
        position: {
          left: 455,
          top: 755
        }
      },
      {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description: "<label class='form-control'><input type='radio' class=al name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Ada Lovelace</b><br><br>Va ser la primera programadora \
                     en la història dels ordinadors. Matemàtica, va col·laborar amb Charles Babbage en el disseny d&#39;una màquina analítica capaç de resoldre \
                     equacions diferencials. A les seves notes de treball va incloure el que ara es considera el primer algorisme que es va intentar dur a terme \
                     en una màquina. És per això que se la considera la primera programadora. '>Ada Lovelace<br></label> \
                     <label class='form-control'><input type='radio' class=al name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Bell Hooks</br></label> \
                     <label class='form-control'><input type='radio' class=al name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Hipàtia d'Alexandria<br></label> \
                     <br><div id='al'></div>" ,
        position: {
          left: 720,
          top: 715
        }
      },
      {
        type: "text",
        title: "Quin nom té aquesta sala?",
        description: "<label class='form-control'><input type='radio' class=my name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Bell Hooks</br></label> \
                      <label class='form-control'><input type='radio' class=my name='gender' onclick='displayRadioValue()' value='Correcte!<br><br><b>Malala Yousafzai</b><br><br> És una estudiant, activista \
                      i bloguera pakistanesa. Actualment, resideix al Regne Unit. Va ser la noia més jove a rebre el Premi Nobel de la Pau el 2014 per defensar \
                      i lluitar a favor de l&#39educació de les dones. A més, va crear la Fundació Malala que esta ispirada en la lluita de Malala, aquesta fundació \
                      defensa l&#39educació secundària per a les nenes i dona visibilitat a les noies adolescents de tot el món. Avui dia encara és \
                      defensora dels drets civils de les dones a tot el món. '>Malala Yousafzai<br></label> \
                      <label class='form-control'><input type='radio' class=my name='gender' onclick='displayRadioValue()' value='Oooo..torna a intentar'>Hipàtia d'Alexandria<br></label> \
                      <br><div id='my'></div>" ,
        position: {
          left: 810,
          top: 690
        }
      },
];

var options = {
  allowHtml: true
};

$(document).ready(function() {
  $("#my-interactive-image").interactiveImage(items, options);
});

function displayRadioValue() {
  var radios = document.querySelectorAll('input');
    console.log(radios)
      for (const radio of radios) {
        radio.onclick = (e) => {
          var value = e.target.value;
          var id = e.target.className;
          document.getElementById(id).innerHTML = e.target.value;
        }
      
    }}

// INTENT DE POSAR EVENTLISTENER ENLLOC DEL ONCLICK

var boxes = document.querySelectorAll('input');
console.log(boxes)
boxes.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    console.log('box clicked', event);
    displayRadioValue();
  });
});


// veure curs 47-Js_events_addeventlistener.js

// document.querySelectorAll('input').forEach(input => {
//   input.addEventListener('click', () => {
//     displayRadioValue();
//   });
// });



// document.selectorAll('div').forEach(div => {
//   div.addEventListener('click', () => {
//       alert(div.innerHTML);
//   });
// });