import { FullResponseWeather } from "../utils/types";

const key = "a9b32d28"
const baseUrl = "https://api.hgbrasil.com";
const pathWeather = "/weather";

export async function fetchWeather(latitude: string, longitude: string) {
    var url = new URL(baseUrl.concat(pathWeather));
    const data = {
        key: key,
        lat: latitude,
        lon: longitude
    };

    for (let k in data) {
        url.searchParams.append(k, data[k]);
    }

    return await fetch(url.href)
        .then(data => data.json().then(json => {
            const fullResponse: FullResponseWeather = json;

            return fullResponse.results;
        }));
}

export async function fetchCityWeather(city: string) {
    var url = new URL(baseUrl.concat(pathWeather));
    const data = {
        key: key,
        city_name: city
    };

    for (let k in data) {
        url.searchParams.append(k, data[k]);
    }

    return await fetch(url.href)
        .then(data => data.json());
}