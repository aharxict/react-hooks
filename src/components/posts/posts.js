import React, { useState, useEffect }  from 'react';
import { Post } from '../post/post';

const url = 'https://jsonplaceholder.typicode.com/posts';

export const Posts = ({counter}) => {
  const [data, setData] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setDataToShow(json.slice(0, counter));

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  const handleFilter = (event) => {
    const word = event.target.value;
    setDataToShow(data.slice(0, counter).filter(item => {
      return item.body.includes(word);
    }))
  };

  useEffect(() => {
    fetchUrl();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setDataToShow(data.slice(0, counter));
    // eslint-disable-next-line
  }, [counter]);

  return (
    <div>
      <h1>Posts</h1>
      { loading ? (
        <div className="container">
          "Loading..."
        </div>
      ) : (
        <div className="container">
          <div>General posts quantity - { data.length}</div>
          <br/>
          <input type="text" onChange={handleFilter}/>
          <ul>
            <li>
              <div>ID</div>
              <div>Title</div>
              <div>Body</div>
            </li>
            {dataToShow.map(({ id, title, body }) => (
              <li key={`post-${id}`}>
                <Post
                  id={id}
                  title={title}
                  body={body}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
};
