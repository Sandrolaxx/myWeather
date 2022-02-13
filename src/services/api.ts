import { FullResponseWeather } from "../utils/types";
import { BASE_URL, WEATHER_PATH, KEY } from "@env";

export async function fetchWeather(latitude: string, longitude: string) {
    var url = new URL(BASE_URL.concat(WEATHER_PATH));
    const data = {
        key: KEY,
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
    var url = new URL(BASE_URL.concat(WEATHER_PATH));
    const data = {
        key: KEY,
        city_name: city
    };

    for (let k in data) {
        url.searchParams.append(k, data[k]);
    }

    return await fetch(url.href)
        .then(data => data.json());
}