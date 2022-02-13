import './Post.css'


export const Post = (props) => {

    const dayjs = require('dayjs')
    const time = dayjs(props.item['time']).format('YYYY-MM-DD HH:mm:ss')

    return (
        <>
            <label className='postSender'>{props.item['username']}</label>
            
            <div className="postHolder">
                <label className='postText'>{props.item['text']}</label>
                <label className='postTime'>{time}</label>
            </div>
        </>
    )
}

export default Post