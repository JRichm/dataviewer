import Image from "next/image";
import Timeline from "./components/timeline";
import JsonViewer from "./components/JsonViewer";

import data from "../../data.json"


export default function Home() {
  return (
    <main>
      <Timeline />
      <h1>JSON Viewer</h1>
      <JsonViewer data={data} />
    </main>
  );
}
