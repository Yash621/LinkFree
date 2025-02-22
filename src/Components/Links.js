import './Links.css'

import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'primereact/button'

function Links({ links }) {
  const colors = {
    youtube: '#FF0000',
    twitter: '#1DA1F2',
    github: '#171515',
    instagram: '#E4405F',
    linkedin: '#0077b5',
  }

  const goToLinkHandle = (url) => {
    window.open(url, '__blank').focus()
  }

  return (
    <section className="p-d-flex p-jc-center p-mb-4">
      <div className="p-d-flex p-flex-column" style={{ width: 70 + '%', maxWidth: 45 + 'rem' }}>
        {links
          .filter((link) => Object.keys(colors).includes(link.icon))
          .map((link, index) => (
            <Button
              className={`p-p-3 p-m-2 p-button-outlined ${link.icon}`}
              style={{ color: colors[link.icon] }}
              key={`link.url_${index}`}
              onClick={() => goToLinkHandle(link.url)}
              role="link"
            >
              <i className={`pi pi-${link.icon} p-px-2`}></i>
              <span className="p-px-3">{link.name}</span>
            </Button>
          ))}
      </div>
    </section>
  )
}

Links.propTypes = {
  links: PropTypes.array.isRequired,
}

export default Links
