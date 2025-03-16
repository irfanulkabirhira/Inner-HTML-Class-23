/*
 1) Get Elements BY ID
 2) Get Elements By Class Name
 3) Get Elements By TagName
 4) Query SelectorALL
 5) QuerySelector

*/
// Where to Add
const placelist = document.getElementById("places-list");
// To create A list on that particular Place
const li = document.createElement("li");
// Tag er moddeh kichu rhakte kikhbi ==> innerTag
li.innerText = "Khagrachori";
// to show , we need to append that==> appendchild er kaz holo ==> section er moddeh bacca kacca gula
placelist.appendChild(li);

// // We will add e new Section Regaring JavaScript
const mainContainer = document.getElementById("main-content");
// // what to do
const section = document.createElement("section");
// const h1 = document.createElement('h1')
// h1.innerText = "My fovorite Food List"
// // To push that into section tag
// section.appendChild(h1)
// const ul = document.createElement('ul')
// const li1 = document.createElement('li')
// li1.innerText = 'Biryani'
// ul.appendChild(li1)

// li2 = document.createElement('li')
// li2.innerText = 'kacchi'
// ul.appendChild(li2)

// // Finally Append the Final ==> mainContainer
// section.appendChild(ul)
// mainContainer.append(section)

// Inner HTMl ==> code korar time e kono suggesiton dibe nah
section.innerHTML = `

<h1> My Fvouite Food List </h1>
<ul>
    <li> Biryani </li>
    <li> kacchi </li>
    <li> Angur </li>
</ul>

`;
mainContainer.appendChild(section);
