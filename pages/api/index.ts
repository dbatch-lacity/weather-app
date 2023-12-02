export async function GET(request: Request) {
  const response = await fetch(
    "http://api.openweathermap.org/geo/1.0/zip?zip=91910&appid=818e9826a9d77fdb838268aad962737e"
  );
  const data = await response.json();
  return data;
}

// import axios from "axios";

// async function fetchData() {
//   try {
//     const response = await axios.get(
//       "http://api.openweathermap.org/geo/1.0/zip?zip=91910&appid=818e9826a9d77fdb838268aad962737e"
//     );
//     console.log("Data:", response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// // Call the function
// fetchData();
