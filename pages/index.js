<<<<<<< HEAD
=======
<<<<<<< HEAD
import Hero from 'components/hero.js'
const Home = (title, subtitle) => {
  return <Hero title='CUBE' subtitle='アウトプットしていくサイト' imageOn />
=======
>>>>>>> chapter2
import Header from 'components/header.js'
import Hero from 'components/hero.js'
import Footer from 'components/footer.js'

export default function Home () {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>

      <Footer />
    </>
  )
>>>>>>> main
}
export default Home
