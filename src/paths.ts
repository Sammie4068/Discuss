const paths = {
    home (){
        return "/"
    },
    topicShow(slug: string) {
        return `/topics/${slug}`
    },
    postcreate(slug: string){
        return `topics/${slug}/post/new/`
    },
    postShow(slug: string, id: number | string) {
        return `${slug}/posts/${id}`
    }
}

export default paths