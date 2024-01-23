import Container from '@/components/Container'
import Header from '@/components/Header'

function App() {
  return (
    <main>
      <Header />
      <Container>
        <section id="about" className="h-[calc(100vh-64px)]">
          <article className="flex flex-col items-center justify-center h-full">
            <h2>João Vitor Santos Cruz</h2>
            <div className="max-w-80">
              <p>
                Started in front-end development at the end of 2022. Since then
                I have learned several technologies like React, TypeScript,
                Next.js, TailwindCSS and others...
              </p>
              <p>
                I&apos;m currently learning more about back-end and node.js
                frameworks so I can become a full-stack developer in the future.
              </p>
            </div>
          </article>
        </section>
        <section id="Skills">
          <h2>Skills</h2>
        </section>
      </Container>
    </main>
  )
}

export default App
