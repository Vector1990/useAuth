/** @jsx jsx */
import { multiples, scales } from '@theme-ui/css'
import { jsx, Styled } from 'theme-ui'

const camelDash = string =>
  string.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)

const alphabeticSort = (a, b) =>
  a.localeCompare(b, undefined, {
    sensitivity: 'base',
  })

export default props => {
  const exclude = Object.keys(multiples)
  const table = Object.keys(scales).reduce((acc, curr) => {
    if (!Array.isArray(acc[scales[curr]])) {
      acc[scales[curr]] = []
    }
    // Exclude `multiples` as they're not real CSS properties
    if (!exclude.includes(curr)) {
      acc[scales[curr]].push(camelDash(curr))
    }
    return acc
  }, {})

  return (
    <Styled.table>
      <thead>
        <tr>
          <th>Theme Key</th>
          <th>CSS Properties</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(table)
          .sort(alphabeticSort)
          .map(key => (
            <tr>
              <td>
                <Styled.inlineCode>{key}</Styled.inlineCode>
              </td>
              <td>
                {table[key].map((property, index) => (
                  <Styled.inlineCode>
                    {!!index && ', '}
                    <Styled.a href={`https://developer.mozilla.org/en-US/docs/Web/CSS/${property}`}>{property}</Styled.a>
                  </Styled.inlineCode>
                ))}
              </td>
            </tr>
          ))}
      </tbody>
    </Styled.table>
  )
}