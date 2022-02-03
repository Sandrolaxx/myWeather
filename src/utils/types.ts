export type ForecastData = {
    date: string,
    weekday: string,
    max: number,
    min: number,
    description: string,
    condition: string
}

export enum EnumEmoji {
    SUN_BEHIND_CLOUD = 0x26C5,
    SUNRISE = 0x1F304,
    SUNSET = 0x1F307,
    WIND = 0x1F4A8,
    DROPLET = 0x1F4A7
}