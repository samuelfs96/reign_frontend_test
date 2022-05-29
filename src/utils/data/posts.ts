const posts = (response: []) => {
    return response.map(post => {
        const {
            story_id: id,
            author,
            story_title: title,
            story_url: url,
            created_at
        } = post

        return {
            id,
            author,
            title,
            url,
            created_at
        }
    })
}

export default posts