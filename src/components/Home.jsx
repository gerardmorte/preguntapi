import { Container} from "react-bootstrap";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTour } from "@reactour/tour";
import { useEffect } from "react";

function Home() {
    const { setIsOpen, setCurrentStep } = useTour();

    useEffect(() => {
        setCurrentStep(0);
        setIsOpen(true);
    }, []);

    return (
        <div className="my-auto">
            <Container>
                <main className="mt-5 text-center" id="text-info">
                    <h1 className="mb-5 fw-bold">preguntAPI</h1>
                    <h2 className="mb-5">
                        La primera API de preguntas de programación en español
                    </h2>
                    <h3>
                        Aprende con nuestros quizzes de programación o usa
                        libremente la API
                    </h3>
                </main>
            </Container>  
            <Player
                src={
                    "https://assets7.lottiefiles.com/packages/lf20_ayopewsc.json"
                }
                className="player w-75"
                loop
                autoplay
            />
        </div>
    );
}

export default Home;
