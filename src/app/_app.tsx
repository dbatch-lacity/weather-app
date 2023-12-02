import { WeatherDataProvider } from "./context/weatherDataContext"; // Adjust the import path according to your file structure
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WeatherDataProvider>
      <Component {...pageProps} />
    </WeatherDataProvider>
  );
}

export default MyApp;
