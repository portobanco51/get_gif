
export const getGifs = async (cat) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(cat)}&limit=20&api_key=ixyF6yDFLPAzBe0fMQHFbbSsbRFzNH55`
    console.log(process.env.GET_GIF_API_KEY);
    const res = await fetch(url)
    const { data } = await res.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}