/* eslint-disable react/prop-types */
// import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';

const BreadCrumbsComp = ({ data }) => {
  return (
    <div role="presentation" style={{ padding: '10px 0' }} onClick={(e) => e.preventDefault()}>
      <Breadcrumbs aria-label="breadcrumb">
        {data.map((item, i) => (
          <Link 
            key={i}
            style={{
              color: 'unset',
              textDecoration: 'unset'
            }}
            to={item.href}
          >
            <MUILink
              key={i + 'd'}
              underline={item.underline}
              color={item.color}
              href={item.href}
              // current={item.current}
            >
              {item.title}
            </MUILink>
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  )
}
export default BreadCrumbsComp