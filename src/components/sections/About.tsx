import background from '@/assets/about.jpg'
import Container from '@/components/Container'

export default function About() {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      id="about"
    >
      <Container>
        <div className="flex flex-col items-center justify-center h-screen backdrop-blur-sm">
          <h2 className="text-6xl font-bold underline underline-offset-8">
            João Vitor Santos Cruz
          </h2>
          <div className="max-w-96 mt-8 space-y-4 font-medium">
            <p>
              Started in front-end development at the end of 2022. Since then I
              have learned several technologies like React, TypeScript, Next.js,
              TailwindCSS and others...
            </p>
            <p>
              I&apos;m currently learning more about back-end and node.js
              frameworks so I can become a full-stack developer in the future.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
