import { Player } from "@lottiefiles/react-lottie-player";

function Home() {
    return (
        <div className="my-auto">
            <div>
                <main className="mt-14 text-center" id="text-info">
                    <h1 className="mb-10 text-5xl font-bold">preguntAPI</h1>
                    <h2 className="mb-10 text-4xl">
                        La primera API de preguntas de programación en español
                    </h2>
                    <h3 className="text-3xl">
                        Aprende con nuestros quizzes de programación o usa
                        libremente la API
                    </h3>
                </main>
            </div>
            <Player
                src={
                    "https://assets7.lottiefiles.com/packages/lf20_ayopewsc.json"
                }
                className="h-96"
                loop
                autoplay
            />
        </div>
    );
}

export default Home;
