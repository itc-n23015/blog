import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero.js'
const Home = (title, subtitle) => {
  return (
    <Container>
      <Meta />
      <Hero title='CUBE' subtitle='アウトプットしていくサイト' imageOn />
    </Container>
  )
}
export default Home
