import Container from '../Container'

export default function Education() {
  return (
    <section className="bg-secondary pt-10">
      <Container>
        <div className="flex flex-col justify-around items-center h-screen md:flex-row">
          <div>
            <h2 className="text-6xl font-bold">Education</h2>
            <p className="max-w-[480px] mt-8 font-medium text-lg">
              Here are my education details, at the end of 2022 I did a course
              with E.B.A.C.
              {'(Escola Britânica de Artes Criativas e Tecnologia'} where I had
              the opportunity to get in the front-end development. After that I
              started in Systems Analysis and Development at Anhanguera.
            </p>
          </div>
          <div className="flex flex-col items-start mx-auto md:mx-0">
            <div className="flex justify-center">
              <div className="flex flex-col items-center relative mr-2">
                <div className="w-4 h-4 rounded-full bg-gray-700 mt-1" />
                <div className="w-1 h-80 bg-gray-700 absolute top-2 left-50" />
              </div>
              <div>
                <p className="font-lg text-md">09/2023 - 02/2026</p>
                <h2 className="font-medium text-md md:text-xl">
                  System Analysis and Development at Anhanguera
                </h2>
                <p className="text-wrap max-w-80 mt-4 text-sm md:text-lg">
                  In this course that I&apos;m currently doing I have learned
                  important things so far like Software Engineering, C Language
                  and System Analysis.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <div className="flex flex-col items-center relative mr-2">
                <div className="w-4 h-4 rounded-full bg-gray-700 mt-1" />
                <div className="w-1 h-[92%] bg-gray-700 absolute top-2 left-50" />
              </div>
              <div>
                <h2 className="font-lg text-md">10/2022 - 07/2023</h2>
                <h2 className="font-medium text-md md:text-xl">
                  Front-end Engineer at E.B.A.C.
                </h2>
                <p className="text-wrap w-80 mt-4 text-sm md:text-lg">
                  In this course I learned about front-end technologies like
                  React, Vue, SASS, Styled Components, jQuery, TypeScript,
                  JavaScript, Cypress.io and Jest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
