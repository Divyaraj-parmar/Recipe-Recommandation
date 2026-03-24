
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Recipe({recipe}) {
    return (
        <section className="suggested-recipe-container">
            <h2>Chef Recommends</h2>
            <ReactMarkdown children={recipe} remarkPlugins={[remarkGfm]} />,
        </section>
  )
}

export default Recipe
