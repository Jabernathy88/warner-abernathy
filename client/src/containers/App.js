import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/app.css'

function App() {
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState('redux')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://hn.algolia.com/api/v1/search?query=${query}`
        // `https://kusoft-pen-pal.herokuapp.com/api/v1/users/1`
      );
      setData(result.data)
    };
    fetchData()
  }, [query])

  return (
    <Fragment>
      <h2>Hello from Fragment App.js</h2>
      <input
        className="px-2"
        type="text"
        value={query}
        onChage={event => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
      <div className="pt-2">
        {data.hits.map(item => (
          <div key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </div>
        ))}
      </div>
    </Fragment>


  )
}

export default App
