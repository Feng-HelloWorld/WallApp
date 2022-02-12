import './Post.css'

export const Post = (props) => {
    return (
        <>
            <label className='postSender'>{props.item['name']}</label>
            
            <div className="postHolder">
                <label className='postText'>{props.item['text']}</label>
                <label className='postTime'>{props.item['time']}</label>
            </div>
        </>
    )
}

export default Post