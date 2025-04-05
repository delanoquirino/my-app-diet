import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export const Hero = () => {
    return (
        <section >
            <div className="container mx-auto text-center sm:pb-10 px-2 md:px-0">

                <Header />

                <div>


                    <h1 className="md:text-6xl text-2xl font-bold mt-8 md:mt-16">
                        Transforme Seu Corpo
                    </h1>
                    <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
                        Deixe que nós cuidamos do seu plano de treino e dieta. Assine nossa plataforma e receba um plano personalizado com dieta e/ou treino completo para você.
                    </p>
                    <form className="md:mt-16 mt-10">
                        <div className="flex flex-col sm:flex-row gap-2 justify-center">
                            <Input
                                placeholder="Coloque seu email"
                                type="text"
                                className="sm:max-w-sm border-gray-300 border"
                            />
                            <Button className="cursor-pointer">Assine Agora</Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Comece seu plano agora mesmo. Cancele quando quiser.
                        </p>
                    </form>
                </div>
                <div className="hidden md:block h-full relative">
                    <Image src={'/images/hero.jpg'} alt="Hero Image" fill sizes="(max-width: 768px) 0vw, 50vw" quality={100} />
                </div>
            </div>
        </section>
    )
}
