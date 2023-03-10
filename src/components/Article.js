export default function Article({img, title, plot, year}) {
  return(
    <section>
      <article id="article-card">
        <img src={img} alt={title} />
        <h2>Title, year</h2>
        <p>plot</p>
      </article>
    </section>
  )
}