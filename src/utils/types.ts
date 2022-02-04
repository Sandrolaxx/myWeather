export type ForecastData = {
    date: string,
    weekday: string,
    max: number,
    min: number,
    description: string,
    condition: ForecastWeather
}

export enum EnumEmoji {
    SUN_BEHIND_CLOUD = 0x26C5,
    SUNRISE = 0x1F304,
    SUNSET = 0x1F307,
    WIND = 0x1F4A8,
    DROPLET = 0x1F4A7
}

export enum ForecastWeather {
    storm = EnumEmoji.SUNRISE,
    snow = EnumEmoji.WIND,
    hail = EnumEmoji.WIND,
    rain = EnumEmoji.SUNRISE,
    fog = EnumEmoji.DROPLET,
    clear_day = EnumEmoji.WIND,
    clear_night = EnumEmoji.WIND,
    cloud = EnumEmoji.DROPLET,
    cloudly_day = EnumEmoji.WIND,
    cloudly_night = EnumEmoji.SUNRISE,
    none_day = EnumEmoji.DROPLET,
    none_night = EnumEmoji.SUNRISE,
}