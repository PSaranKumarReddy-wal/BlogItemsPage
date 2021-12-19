import BlogItem from '../BlogItem'

const BlogList = ({data}) => (
  <>
    <div>
      {data && data.map(item => <BlogItem key={item.id} item={item} />)}
    </div>
  </>
)

export default BlogList
