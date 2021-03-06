export type FullResponseWeather = {
    by: string,
    valid_key: boolean,
    results: WeatherData
}

export interface CardProps {
    weather: WeatherData,
    renderEmoji: boolean
}

export interface ConditionProps {
    weather: WeatherData;
}

export type WeatherData = {
    temp: number,
    currently: string,
    city: string,
    date: string,
    humidity: number,
    wind_speedy: string,
    sunrise: string,
    sunset: string,
    condition_slug: string,
    forecast: ForecastData[]
}

export type ForecastData = {
    date: string,
    weekday: string,
    max: number,
    min: number,
    description: string,
    condition: ForecastWeather
}

export enum EnumEmoji {
    SUNRISE = 0x1F304,
    SUNSET = 0x1F307,
    WIND = 0x1F4A8,
    DROPLET = 0x1F4A7,
    STORM = 0x1F329,
    SNOW = 0x1F328,
    HAIL = 0x1F9CA,
    RAIN = 0x1F327,
    FOG = 0x1F301,
    CLEAR_DAY = 0x1F31E,
    CLEAR_NIGHT = 0x1F31D,
    CLOUD = 0x2601,
    CLOUDLY_DAY = 0x1F325,
    CLOUDLY_NIGHT = 0x2601,
    NONE_DAY = 0x1F31E,
    NONE_NIGHT = 0x1F31A,
    SEARCH = 0x1F50D
}

export enum ForecastWeather {
    storm = EnumEmoji.STORM,
    snow = EnumEmoji.SNOW,
    hail = EnumEmoji.HAIL,
    rain = EnumEmoji.RAIN,
    fog = EnumEmoji.FOG,
    clear_day = EnumEmoji.CLEAR_DAY,
    clear_night = EnumEmoji.CLEAR_NIGHT,
    cloud = EnumEmoji.CLOUD,
    cloudly_day = EnumEmoji.CLOUDLY_DAY,
    cloudly_night = EnumEmoji.CLOUDLY_NIGHT,
    none_day = EnumEmoji.NONE_DAY,
    none_night = EnumEmoji.NONE_NIGHT,
}