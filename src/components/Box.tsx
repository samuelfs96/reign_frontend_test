import timeIcon from '../icons/time-icon.svg'
import heartIcon from '../icons/heart-icon.svg'
import heartIconOutlined from '../icons/heart-icon-outlined.svg'
import getTimeAgo from '../utils/helpers/getTimeAgo'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface Props {
  className?: string,
  id: string,
  author: string,
  title: string
  url: string,
  created_at: string
}

const Box = ({
  className,
  id,
  author,
  title,
  url,
  created_at 
}: Props) => {

  const [fav, setFav] = useLocalStorage(`fav-${id}`, '')

  const handleFav = () => setFav(!fav)

  return (
    <div className={className}>
      <div className="comment-box">
        <img src={timeIcon} alt="img" />
        <span>{getTimeAgo(created_at)} ago by {author}</span>
        <p>
          {title}
        </p>
      </div>
      <div className='fav-box' onClick={handleFav}>
        <img src={fav ? heartIcon : heartIconOutlined} alt="img" />
      </div>
    </div>
  )
}

export default Box