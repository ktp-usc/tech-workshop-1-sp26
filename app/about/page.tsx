import Greeting from "@/components/Greeting";

export default function AboutPage() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">About Me</h1>
            <div className="text-lg md:text-xl text-gray-700">
                <Greeting name="Braden"/>
            </div>
        </section>
    );
}