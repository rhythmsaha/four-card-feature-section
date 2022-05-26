import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <main className="max-w-5xl w-10/12 mx-auto">
        <div className="flex flex-col items-center mt-12">
          <h1 className="text-2xl font-extralight text-very-dark-blue">
            Reliable, efficient, delivery
          </h1>
          <h1 className="text-2xl font-semibold text-very-dark-blue">
            Powered by Technology
          </h1>
          <p className="mt-4 text-[15px] lg:text-base text-center text-grayish-blue max-w-md">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>

        <section className="p-1 mt-16 grid gap-8 xl:grid-cols-3 place-items-center">
          <div className="shadow-lg rounded-xl overflow-hidden xl:row-span-2 w-full">
            <Card
              line="bg-primary-cyan"
              title="Supervisor"
              text="Monitors activity to identify project roadblocks"
              image="/images/icon-supervisor.svg"
            />
          </div>

          <div className="shadow-lg rounded-xl overflow-hidden w-full">
            <Card
              line="bg-primary-red"
              title="Team Builder"
              text="Scans our talent network to create the optimal team for your project"
              image="/images/icon-team-builder.svg"
            />
          </div>

          <div className="shadow-lg rounded-xl overflow-hidden w-full xl:order-4">
            <Card
              line="bg-primary-orange"
              title="Karma"
              text="Regularly evaluates our talent to ensure quality"
              image="/images/icon-karma.svg"
            />
          </div>

          <div className="shadow-lg rounded-xl overflow-hidden w-full xl:row-span-2">
            <Card
              line="bg-primary-blue"
              title="Calculator"
              text="Uses data from past projects to provide better delivery
              estimates"
              image="/images/icon-calculator.svg"
            />
          </div>
        </section>
      </main>

      <footer className="text-center mt-28 text-xs text-gray-400">
        Challenge by Frontend Mentor. Coded by Your Rhythm Saha.
      </footer>
    </>
  );
}
