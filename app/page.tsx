import Greeting from "@/components/Greeting";

export default function Home() {
    return (
        <section className="bg-teal-400 min-h-screen">
            <h1 className="text-3xl font-bold text-blue-600 text-center pt-4">Hello World</h1>
            <div className="flex flex-wrap items-center justify-center w-full flex-col">
                <button className="mt-4 rounded bg-black px-4 py-2">Click Me</button>
                <Greeting name="KTP"/>
                <Greeting name="Braden"/>
                <Greeting name="Name"/>
            </div>
        </section>
    );
}
