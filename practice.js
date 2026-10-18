const hackathons = [
  {
    id: 1,
    name: "Student Build Weekend",
    format: "online",
    beginnerFriendly: true,
    deadline: "2027-02-10T23:59:00Z"
  },
  {
    id: 2,
    name: "Campus Code Challenge",
    format: "in-person",
    beginnerFriendly: false,
    deadline: "2027-01-20T23:59:00Z"
  },
  {
    id: 3,
    name: "Beginner Innovation Jam",
    format: "hybrid",
    beginnerFriendly: true,
    deadline: "2027-03-05T23:59:00Z"
  },
  {
    id: 4,
    name: "Hello World Hackathon",
    format: "online",
    beginnerFriendly: true,
    deadline: "2026-12-25"
  },
  {
    id: 5,
    name: "MIT hacknight",
    format: "in-person",
    beginnerFriendly: false,
    deadline: "2027-03-27"
  }
];

const names = (element) => {return element.name}
const formats = (element) => {return element.format == "online"}
const introductory = (element) => {return element.beginnerFriendly}
const hack_id = (element, id) => {return element.id == id}
const hack_names = (element, word) => {return element.name.toLowerCase() == word.toLowerCase()}
const sortedHackathons = [...hackathons].sort((a, b) => {
  return new Date(a.deadline) - new Date(b.deadline);
});

let hackthon_names = hackathons.map(names)
let hackathon_type = hackathons.filter(formats)
let hackathon_difficulty = hackathons.filter(introductory)
let hackathon_id = hackathons.find(element => hack_id(element, 2))
let hackathon_word = hackathons.filter(element => hack_names(element, "MIT hacknight"))


function renderHackathons(events){
  document.getElementById("hackathon-list").replaceChildren()
  for(const hackathon of events){
    const hackathonid1 = document.createElement("article")
    const hackathonid1name = document.createElement("h2")
    const hackathonid1format = document.createElement("p")
    const hackathonid1beginner = document.createElement("p")
    const hackathonid1date = document.createElement("p")
    hackathonid1date.textContent = hackathon.deadline
    hackathonid1name.textContent = hackathon.name;
    hackathonid1format.textContent = hackathon.format;
    hackathonid1beginner.textContent = hackathon.beginnerFriendly ? "Beginner":"Prior experience recommended"
    hackathonid1.append(hackathonid1name, hackathonid1format, hackathonid1beginner, hackathonid1date)
    document.getElementById("hackathon-list").appendChild(hackathonid1)
  }
}
function updateResults(){
  document.getElementById("hackathon-list").replaceChildren()
  const hack_name = (element) => {return element.name.toLowerCase().includes(document.getElementById("searchbar").value.toLowerCase())}
  const formats = (element) => {return document.getElementById("formatdropdownmenu").value === "all" || element.format === document.getElementById("formatdropdownmenu").value}
  const introductory = (element) => {return !document.getElementById("beginnercheck").checked || element.beginnerFriendly}
  if(sortedHackathons.filter(element => hack_name(element) && formats(element) && introductory(element)).length > 0){
    return renderHackathons((sortedHackathons.filter(element => hack_name(element) && formats(element) && introductory(element))))
  }
  else {
    const nohackathon = document.createElement("h2")
    nohackathon.textContent = "No hackathons match your filter"
    document.getElementById("hackathon-list").appendChild(nohackathon)
  }
  //sortedHackathons.filter(element => hack_name(element) && formats(element) && introductory(element)).length > 0 ? return renderHackathons((sortedHackathons.filter(element => hack_name(element) && formats(element) && introductory(element)))) : "No hackathons match your filter"
}
renderHackathons(sortedHackathons)
//updateResults(hackathons, document.getElementById("searchbar").value, document.getElementById("formatdropdownmenu"), document.getElementById("beginnercheck").checked)

