import fs from 'fs';
import path from 'path';

export default function PostPage() {
    return (
        <div>

        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => {
        params: {
            slug: filename.replace('.md', '' )
        }
    })

    return {
        paths,
        fallback: false // If tries to access path that doesn't exist, send t0 404'
    }
}

export async function getStaticProps() {
    return {
        props: {}
    }
}