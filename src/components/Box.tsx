import timeIcon from '../icons/time-icon.svg'
import heartIcon from '../icons/heart-icon.svg'
import heartIconOutlined from '../icons/heart-icon-outlined.svg'
import getTimeAgo from '../utils/helpers/getTimeAgo'

interface Props {
  className?: string,
  id: number,
  author: string,
  title: string
  url: string,
  created_at: string
  favPosts: []
  setFavPosts: any
  isFav: any
}

const Box = ({
  className,
  id,
  author,
  title,
  url,
  created_at,
  favPosts,
  setFavPosts,
  isFav
}: Props) => {

  const handleFav = () => {
    const _favPosts: Array<any> = [...favPosts]
    const findPost = _favPosts.find(post => post.id === id)
    if(findPost){
      findPost.isFav = !isFav
    }else{
      _favPosts.push({
        id: id,
        isFav: !isFav
      })
    }
    setFavPosts(_favPosts)
  }

  const hadleOpenUrl = () => {
    window.open(url, "_blank")
  }

  return (
    <div className={className}>
      <div className="comment-box" onClick={hadleOpenUrl}>
        <div className="align-items-center">
          <img src={timeIcon} alt="img" />
          <span>{getTimeAgo(created_at)} ago by {author}</span>
        </div>
        <p>
          {title}
        </p>
      </div>
      <div className='fav-box' onClick={handleFav}>
        <img src={isFav ? heartIcon : heartIconOutlined} alt="img" />
      </div>
    </div>
  )
}

export default Box