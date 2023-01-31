import React from 'react';
import { Input } from 'antd';

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <Input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
