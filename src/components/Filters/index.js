import React from 'react'

export const Filters = ({ filters, setFilters }) => {
  return (
    <input
      name='search'
      value={filters.search}
      onChange={event => setFilters({ search: filters.search === '' ? null : event.target.value })}
      type='text'
      placeholder='Search...'
    />
  )
}
