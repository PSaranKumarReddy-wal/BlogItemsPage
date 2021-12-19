import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

const BlogItemDetails = () => {
  const {id} = useParams()
  const [itemData, setItemData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const fetching = async () => {
    const fetchData = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await fetchData.json()
    setItemData(data)
    setIsLoading(false)
  }
  useEffect(() => {
    fetching()
  }, [])
  return (
    <div testid="loader">
      {isLoading ? (
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      ) : (
        <div className="blog-info">
          <h2 className="blog-details-title">{itemData.title}</h2>
          <div className="author-details">
            <img
              className="author-pic"
              src={itemData.avatar_url}
              alt={itemData.author}
              width="500"
            />
            <p className="details-author-name">{itemData.author}</p>
          </div>
          <img
            className="blog-image"
            src={itemData.image_url}
            alt={itemData.title}
            width="500"
          />
          <p className="blog-content">{itemData.content}</p>
        </div>
      )}
    </div>
  )
}

export default BlogItemDetails
