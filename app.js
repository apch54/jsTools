
*
   __  __             _              _     
  |  \/  |  _  _     | |_ ___  ___ | | ___
  | |\/| || || |    |  _|/ _ \/ _ \| |(_-<
  |_|  |_| \_, |    \__|\___/\___/|_|/__/
          |__/   
*/

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
//========================================
//dates function
// toStr returns the date whith "yyyy-mm-dd" format
// d must be a typeoff date
// the first is the procedural mode : tostr(date)
// the second is the object mode :d.toStr()
const toStr = d => d.toISOString().substring(0, 10);
Date.prototype.toStr = function () {
    return this.toISOString().substring(0, 10);
};

// This method returns a date with  an interval of dj days with
//  the initial day :d1"
// The millisecondes of the date is modified with  number dj date : dj(+, -)
// 86.400.000 is the milli secondes in a day
// The first is the procedural mode : toInterval(date))
// The second is the object mode :d.toInterval()
const toInterval = (d1, dj) => new Date(d1.getTime() + 86400000 * dj);
Date.prototype.toInterval = function(dj) { 
   return new Date(this.getTime() + 86400000 * dj);  
};

// test my methods

cl("-----.-----");
let now = new Date();
cl(toStr(now), " ", " Mode procédutal");
cl(now.toStr(), " ", " Mode objet");
cl("\n-----.-----");
// date passée de dj jours
cl(toInterval(now, -10).toStr()); // mode procédural
cl(toStr(toInterval(now, -10)));  // mode mixte)
cl(now.toInterval(-10).toStr());  // Mode objet
cl('-----.-----')

// dom functions
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

//test my dom functions

set_dom("#d1", "<strong>Passée avec mes fonctions.</strong>");
cl(get_dom("#d1"));
for (let i = 0; i < 5; i++) {
  app_child("#u1", "li", "honney");
}




