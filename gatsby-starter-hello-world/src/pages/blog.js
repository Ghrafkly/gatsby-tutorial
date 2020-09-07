import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel laborum
          consequuntur earum ipsa eaque placeat libero repellat expedita, nihil
          reprehenderit ab asperiores in eveniet quisquam.
        </p>
      </div>
    </Layout>
  )
}

export default blog
