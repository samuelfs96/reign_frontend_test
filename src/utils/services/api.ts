const api_url = 'https://hn.algolia.com/api/v1/search_by_date'

const getPosts = async (params: string): Promise<any> => {
    const url = `${api_url}/${params}`
    const response = await fetch(url)
        .then(response => response.json())
    return response
}

const exportedObject = {
    getPosts
}

export default exportedObject