import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Formik } from 'formik'

import { animeList } from '../../client/queries'
import './filters.css'

const initialFilters = {
  search: '',
  year: ''
}

export const Filters = ({ setAnimes }) => {
  const [filters, setFilters] = useState()
  const { data } = useQuery(animeList, { variables: filters })

  useEffect(() => {
    if (data) {
      setAnimes(data.Page.ANIME)
    }
  })

  return (
    <div className='filter-wrapper'>
      <h3 className='header'>Search by:</h3>
      <Formik
        initialValues={initialFilters}
        onSubmit={(values, { setSubmitting }) => {
          setFilters({ search: values.search })
          setSubmitting(false)
        }}
      >
        {({ values, isSubmitting, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className='input-group'>
              <div className='input-wrapper'>
                <label htmlFor='search'>Title: </label>
                <input
                  className='input-field'
                  name='search'
                  value={values.search}
                  onChange={handleChange}
                  type='text'
                  placeholder='Search...'
                />
              </div>
              <div className='input-wrapper'>
                <label htmlFor='year'>Year: </label>
                <input
                  className='input-field'
                  name='year'
                  value={values.year}
                  onChange={handleChange}
                  type='text'
                  placeholder='Year...'
                />
              </div>
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
