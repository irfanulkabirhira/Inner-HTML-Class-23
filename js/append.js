/*
// ==> ei shob jinish die kono ekta particular kichu k dhorte parci <==
 1) Get Elements BY ID
 2) Get Elements By Class Name
 3) Get Elements By TagName
 4) Query SelectorALL
 5) QuerySelector
*/

// --->  Append means to Add something <----
// ==> Where to Add <====
const placelist = document.getElementById("places-list");
// To create A list on that particular Place
const irfan = document.createElement("li");
// Tag er moddeh kichu rhakte kikhbi ==> innerTag
irfan.innerText = "Khagrachori";
// to show , we need to append that==> appendchild er kaz holo ==> section er moddeh bacca kacca gula
placelist.appendChild(irfan);



// --> Where to Add <----
// ===> We will add e new Section Regaring JavaScript <=====
const mainContainer = document.getElementById("main-content");
// ====>  what to do ==> we will ad section regarding JavaScript <========
// To create a section tag
const section = document.createElement("section");
// 1 ta h1 tag dibo
const h1 = document.createElement('h1')
h1.innerText = "My fovorite Food List"
// To push that into section tag
section.appendChild(h1)
// To Create a Un-Order list (UL)
const ul = document.createElement('ul')
// To create the first list
const li1 = document.createElement('li')
li1.innerText = 'Biryani'
ul.appendChild(li1)

// For l2==> 2nd List
li2 = document.createElement('li')
li2.innerText = 'kacchi'
ul.appendChild(li2)

// For l3 ==> 3rd list
li3 = document.createElement('li')
li3.innerText = 'Cookies'
ul.appendChild(li3)

// Finally Append the Final ==> mainContainer
section.appendChild(ul)
mainContainer.append(section)
