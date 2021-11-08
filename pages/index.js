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
                        Our Artificial Intelligence powered tools use millions
                        of project data points to ensure that your project is
                        successful
                    </p>
                </div>

                <section className="p-1  mt-16 grid gap-8 xl:grid-cols-3 place-items-center">
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden xl:row-span-2 w-full">
                        <div className="h-1 bg-primary-cyan" />
                        <div className="p-8">
                            <h1 className="text-xl font-semibold text-very-dark-blue">
                                Supervisor
                            </h1>
                            <p className="mt-2 text-grayish-blue text-sm ">
                                Monitors activity to identify project roadblocks
                            </p>
                            <div>
                                <img
                                    src="/images/icon-supervisor.svg"
                                    alt="supervisor"
                                    className="ml-auto mt-8"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full">
                        <div className="h-1 bg-primary-red" />
                        <div className="p-8">
                            <h1 className="text-xl font-semibold text-very-dark-blue">
                                Team Builder
                            </h1>
                            <p className="mt-2 text-grayish-blue text-sm">
                                Scans our talent network to create the optimal
                                team for your project
                            </p>
                            <div>
                                <img
                                    src="/images/icon-team-builder.svg"
                                    alt="team-builder"
                                    className="ml-auto mt-8"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full xl:order-4">
                        <div className="h-1 bg-primary-orange" />
                        <div className="p-8">
                            <h1 className="text-xl font-semibold text-very-dark-blue">
                                Karma
                            </h1>
                            <p className="mt-2 text-grayish-blue">
                                Regularly evaluates our talent to ensure quality
                            </p>
                            <div>
                                <img
                                    src="/images/icon-karma.svg"
                                    alt="karma"
                                    className="ml-auto mt-8"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full xl:row-span-2">
                        <div className="h-1 bg-primary-blue" />
                        <div className="p-8">
                            <h1 className="text-xl font-semibold text-very-dark-blue">
                                Calculator
                            </h1>
                            <p className="mt-2 text-grayish-blue">
                                Uses data from past projects to provide better
                                delivery estimates
                            </p>
                            <div>
                                <img
                                    src="/images/icon-calculator.svg"
                                    alt="calculator"
                                    className="ml-auto mt-8"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="text-center mt-28 text-xs text-gray-400">
                Challenge by Frontend Mentor. Coded by Your Rhythm Saha.
            </footer>
        </>
    );
}
