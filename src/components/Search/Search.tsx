import React from 'react';

import {Input} from "components";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<string>;
}

export const Search = ({searchQuery, setSearchQuery}: SearchProps) => {
  return (
    <div>
      <Input
        placeholder="Search ToDo..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
      />
    </div>
  );
};
