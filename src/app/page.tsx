import Link from "next/link";
import GetAllComponents from './components/getAllComponents'



export default function Home() {
  
  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <GetAllComponents />
      </div>
    </div>
  );
}
