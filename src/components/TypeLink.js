import React from 'react'
import { Link } from 'gatsby'
import { findTypeData } from '../schema'

class TypeLink extends React.Component {
  render() {
    const { to } = this.props
    const url = '/' + to
    const typeData = findTypeData(to) || { id: to }
    const linkText = typeData.label || typeData.id

    return <Link to={url}>{linkText}</Link>
  }
}

export default TypeLink
