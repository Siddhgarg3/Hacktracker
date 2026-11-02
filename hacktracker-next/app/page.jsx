"use client";
import { hackathons } from "../data/hackathons"
import { useState } from "react";
import HackathonCard from "../components/HackathonCard"
export default function Home() {
    const [query, setQuery] = useState("");
    const [format, setFormat] = useState("all");
    const [beginneronly, setBeginnerOnly] = useState(false)
    const hack_name = (element) => {return element.name.toLowerCase().includes(query.toLowerCase())};
    const formats = (element) => {return format === "all" || element.format === format};
    const introductory = (element) => {return !beginneronly || element.beginnerFriendly};
    const sortedHackathons = [...hackathons].sort((a,b) => {return new Date(a.deadline) - new Date(b.deadline)});
    const filteredHackathons = sortedHackathons.filter(element => hack_name(element) && formats(element) && introductory(element));
    function updateQuery(event){
      setQuery(event.target.value);
    }
    function updateFormat(event){
      setFormat(event.target.value);
    }
    function updateBeginner(event){
      setBeginnerOnly(event.target.checked);
    }
    return (<>
    <h1>Discover hackathon </h1>
      <label htmlFor='searchbar'> Search bar: </label>
      <input id = "searchbar" value={query} onChange={updateQuery}/>
      <label htmlFor='dropdownmenu'> Choose Format: </label>
      <select value={format} onChange={updateFormat} id = "dropdownmenu">
        <option value="all" id = "all"> all </option>
        <option value="online" id = "online"> online </option>
        <option value="in-person" id = "inperson"> in-person </option>
        <option value="hybrid" id = "hybrid"> hybrid </option>
      </select>
      <label htmlFor='beginnercheck'> Beginner-only </label>
      <input type='checkbox' id='beginnercheck' checked = {beginneronly} onChange={updateBeginner}></input>
      {filteredHackathons.length === 0 && <p>No hackathons found</p>}
      {filteredHackathons.map(hackathon => (<HackathonCard hackathon = {hackathon} key = {hackathon.id}/>))}
    </>);
}