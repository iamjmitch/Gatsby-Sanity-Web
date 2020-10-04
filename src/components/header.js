import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        query siteSettings {
          allSanitySiteSettings {
            nodes {
              siteName
            }
          }
        }
      `}
      render={data => (
        <header
          style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {data.allSanitySiteSettings.nodes[0].siteName}
              </Link>
            </h1>
          </div>
          {console.log({ data })}
        </header>
      )}
    />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
