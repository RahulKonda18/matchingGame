import './ThumbnailItem.css'

const ThumbnailItem = props => {
  const {details, check} = props
  const {thumbnailUrl, imageUrl} = details

  const f = () => {
    check(imageUrl)
  }

  return (
    <li onClick={f}>
      <button type="button">
        <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
