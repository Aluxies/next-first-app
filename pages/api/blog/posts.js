import posts from "./post";

export default function post(req, res) {
    const {id} = req.query;
    if (id) {
        const postFound = posts.find(e => e.id === id );

        if (postFound) {
            console.log(postFound);
            res.status(200).json(postFound);
        } else {
            res.status(404).json({message: "Not Found"});
        }
        return;
    }
    res.status(200).json(posts);
}