import Image from "next/image";
import Timeline from "./components/timeline";
import JsonViewer from "./components/JsonViewer";

import data from "../../data.json"



/*
  what do i want to create?


  i want to create an application that will show us 2d graphs displaying specific data about meteorite

  in this application, the user should be able to apply certain filters for specific data

  some of the use cases for this application will be
      show a bar graph displaying each meteorite landing, displaying one year at a time
      each bar will represent individual meteorite landings
      the x axis will represet time and the y axis will represent the mass of each meteor
  



  what do i need to do to achieve this

    1) import data from json to database
    2) create api to retrieve data from database
    3) devlop front end to display data

    
  

*/


export default function Home() {
  return (
    <main>
      <Timeline />
      <h1>JSON Viewer</h1>
      <JsonViewer data={data} />
    </main>
  );
}
