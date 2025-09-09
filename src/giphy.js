export default class GiphyAPI {
    static key = "et5O4SN1lWGD33DCsGF64YrvaDR5te5q";

    // get giphy based on query
    static async getGIF(query) {
        const trimQuery = query.trim()
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GiphyAPI.key}&s=${trimQuery}`)

        const json = await response.json();
        const gifURL = json.data.images.original.url;
        return gifURL;
    }
}