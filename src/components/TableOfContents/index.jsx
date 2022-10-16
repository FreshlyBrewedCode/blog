import React from "react"
import * as styles from "./styles.module.scss"

const TableOfContents = ({ items, noHeader = false }) => {
  return (
    <>
      {!noHeader && <h1 class={styles.header}>Table of Contents</h1>}
      {renderItems(items)}
    </>
  )
}

function renderItems(items) {
  return (
    <ol className={styles.toc}>
      {items.map(item => (
        <li key={item.url}>
          <a href={item.url}>{item.title}</a>
          {item.items && renderItems(item.items)}
        </li>
      ))}
    </ol>
  )
}

export default TableOfContents
