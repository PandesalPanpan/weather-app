export default class WeatherAPI {
    static key = "WDYM8SDFRX7SEUJMSR8KXWPUV"

    // Fetching the json from the Visual Crossing API
    static async getWeather(query) {
        // Request to the API
        const trimQuery = query.trim()
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${trimQuery}?unitGroup=us&key=${WeatherAPI.key}&contentType=json`);
        
        // Convert to JSON
        const json = await response.json()
        return json;
    }

}