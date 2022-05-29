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



function App() {

  const [tabValue, setTabValue] = useState('')
  const [selectValue, setSelectValue] = useLocalStorage('selectValue', '')
  const [currentPage, setCurrentPage] = useState(1)

  const [posts, setPosts] = useState<Post[]>([])
  const [favPosts, setFavPosts] = useLocalStorage('favPosts', [])

  useEffect(() => {
    if(selectValue)
      apiService.getPosts(`?query=${selectValue}&page=0`).then(({hits}) => {
      const _posts = postsTyped(hits)
      setPosts(_posts)
      })
  }, [selectValue])

  return (
    <>
    
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
            posts.map((post, key) => (
              <Box 
                key={key}
                className="box"
                id={post.id}
                author={post.author}
                title={post.title}
                url={post.url}
                created_at={post.created_at}
                favPosts={favPosts}
                setFavPosts={setFavPosts}
                isFav={favPosts.find((el: any) => el.id === post.id)?.isFav}
              />
            ))
          }
        </div>
        <div className="center-elements" style={{marginTop: '45px'}}>
          <Pagination
            currentPage={currentPage}
            totalCount={80}
            pageSize={4}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
