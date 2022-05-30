import { useEffect, useState } from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Select from "./components/Select";
import Tabs from "./components/Tabs";
import { useLocalStorage } from './hooks/useLocalStorage'
import apiService from './utils/services/api'
import postsTyped from "./utils/data/posts";
import { Post } from "./utils/types/Post";
import Loader from "./components/Loader";



function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [tabValue, setTabValue] = useState('')
  const [selectValue, setSelectValue] = useLocalStorage('selectValue', '')
  const [currentPage, setCurrentPage] = useState(1)

  const [posts, setPosts] = useState<Post[]>([])
  const [favPosts, setFavPosts] = useLocalStorage('favPosts', [])

  useEffect(() => {
    if(selectValue){
      setIsLoading(true)
      apiService.getPosts(`?query=${selectValue}&page=1&hitsPerPage=8`).then(({hits}) => {
        setCurrentPage(1)
        const _posts = postsTyped(hits)
        setPosts(_posts)
      }).finally(() => setIsLoading(false))
    }
  }, [selectValue])

  const handleChangePage = (page: number) => {
    setIsLoading(true)
    apiService.getPosts(`?query=${selectValue}&page=${page}&hitsPerPage=8`).then(({hits}) => {
      const _posts = postsTyped(hits)
      setPosts(_posts)
      setCurrentPage(page)
    }).finally(() => setIsLoading(false))
  }

  return (
    <>
    {
      isLoading && (
        <Loader />
      )
    }

    <Header className="header">
        <p className="m-0">HACKER NEWS</p>
    </Header>

    <div className="container">
      <Tabs 
        className="tabs"
        value={tabValue}
        setValue={setTabValue}
      />
      <div style={{marginTop: '45px'}}>
        <Select 
          className="dropdown"
          value={selectValue}
          setSelectValue={setSelectValue}
        />
        <div className="wrap" style={{marginTop: '45px'}}>
          {
            posts.map(({id, author, title, url, created_at}, key) => {
                return (
                  <Box 
                      key={key}
                      className="box"
                      id={id}
                      author={author}
                      title={title}
                      url={url}
                      created_at={created_at}
                      favPosts={favPosts}
                      setFavPosts={setFavPosts}
                      isFav={favPosts.find((el: any) => el.id === id)?.isFav}
                    />
                )
            })
          }
        </div>
        <div className="center-elements" style={{marginTop: '45px'}}>
          <Pagination
            currentPage={currentPage}
            totalCount={posts?.length || 0}
            pageSize={1}
            onPageChange={handleChangePage}
          />
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
