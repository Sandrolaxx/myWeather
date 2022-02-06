import { FullResponseWeather } from "../utils/types";

const key = "a9b32d28"
const baseUrl = "https://api.hgbrasil.com";
const pathWeather = "/weather";

export async function fetchWeather(latitude: string, longitude: string) {
    const data = {
        key: key,
        lat: latitude,
        lon: longitude
    };
    var url = new URL(baseUrl.concat(pathWeather));

    for (let k in data) {
        url.searchParams.append(k, data[k]);
    }

    return await fetch(url.href)
        .then(data => data.json().then(json => {
            const fullResponse: FullResponseWeather = json;

            return fullResponse.results;
        }));

}