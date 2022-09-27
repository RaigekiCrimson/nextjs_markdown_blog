import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Posts from '../components/Post'
import Post from "../components/Post";

export default function Home({posts}) {
    console.log(posts)
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <div className="posts">
          {posts.map((posts, index) => (
              <Post post = {posts} />
          ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
    // Get Files from Posts directory
    const files = fs.readdirSync(path.join('posts'))

    //Get slug and frontmatter from posts
    const posts = files.map(filename => {
        // Create Slug
        const slug = filename.replace('.md','')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf8')

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts,
        }
    }
}