"use strict"
// my functions ----------
const cl = console.log;

// Fill dom id with html
let set_dom = (id = "#div", html = "") => (document.querySelector(id).innerHTML = html);

// Get dom id inner html value
let get_dom = (id = "#div") => document.querySelector(id).innerHTML;

//atppend a li node of type typ
let app_child = (id = "#u1", typ = "li", txt = "") => {
  const nod = document.createElement(typ);
  const txt_nod = document.createTextNode(txt);
  nod.appendChild(txt_nod);
  document.querySelector(id).appendChild(nod);
};
//end my functions and test my function ----------

//test my functions

set_dom("#d1", "<strong>Passée avec mes fonctions.</strong>");
cl(get_dom("#d1"));
for (let i = 0; i < 5; i++) {
  app_child("#u1", "li", "honney");
}


