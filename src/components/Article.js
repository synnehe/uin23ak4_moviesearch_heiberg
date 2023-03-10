export default function Article({img, title, plot, year}) {
  return(
    <article id="article-card">
      <img src={img} alt={title} />
      <h2>Title, year</h2>
      <p>plot</p>
    </article>
  )
}