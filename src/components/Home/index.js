import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import BlogList from '../BlogList'
import './index.css'
import UserInfo from '../UserInfo'

const Home = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchingData = async () => {
    const fetchData = await fetch('https://apis.ccbp.in/blogs')
    const fetchResult = await fetchData.json()
    setData(fetchResult)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchingData()
  }, [])
  return (
    <>
      <UserInfo />

      {isLoading ? (
        <div testid="loader">
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        </div>
      ) : (
        <BlogList data={data} />
      )}
    </>
  )
}

export default Home
