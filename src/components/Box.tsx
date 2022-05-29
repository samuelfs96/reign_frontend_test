import timeIcon from '../icons/time-icon.svg'
import heartIcon from '../icons/heart-icon.svg'
import heartIconOutlined from '../icons/heart-icon-outlined.svg'
import getTimeAgo from '../utils/helpers/getTimeAgo'

interface Props {
  className?: string,
  author: string,
  title: string
  url: string,
  created_at: string
}

const Box = ({
  className,
  author,
  title,
  url,
  created_at 
}: Props) => {
  return (
    <div className={className}>
      <div className="comment-box">
        <img src={timeIcon} alt="img" />
        <span>{getTimeAgo(created_at)} ago by {author}</span>
        <p>
          {title}
        </p>
      </div>
      <div className='fav-box'>
        <img src={heartIcon} alt="img" />
      </div>
    </div>
  )
}

export default Box