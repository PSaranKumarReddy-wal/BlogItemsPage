import {Link} from 'react-router-dom'

const BlogItem = ({item}) => (
  <>
    <Link to={`/blogs/${item.id}`} className="item-link">
      <div className="item-container">
        <img
          className="item-image"
          src={item.image_url}
          alt={`item${item.id}`}
          width="500"
        />
        <div className="item-info">
          <p className="item-topic">{item.topic}</p>
          <h1 className="item-title">{item.title}</h1>
          <div className="author-info">
            <img
              className="avatar"
              src={item.avatar_url}
              alt={`avatar${item.id}`}
              width="500"
            />
            <p className="author-name">{item.author}</p>
          </div>
        </div>
      </div>
    </Link>
  </>
)

export default BlogItem
