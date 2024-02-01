import { PostTypes } from "../types"
const PostCard = ({ title,  views }: PostTypes) => {
    
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h4>{title}</h4>
            <p>{views}</p>
        </div>
    )
}

export default PostCard
