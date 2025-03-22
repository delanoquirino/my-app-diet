import { TrainingCard } from "@/components/training-card"

export default function ExerciciosPage() {
    return (
        <main className="sm:ml-14 p-4">
            <div className="min-h-screen p-4">
                <header className="py-6">
                    <h1 className="text-2xl font-mono">Minha Rotina</h1>

                </header>

                <main className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <TrainingCard
                            type="TREINO A"
                            training={["Abdominal 3x10", "Remada 3x10", "Puxada Frontal 3x10", "Puxada na Polia 3x10", "Remada 3x10", "Puxada Frontal 3x10", "Puxada na Polia 3x10"]}

                        />

                        <TrainingCard
                            type="TREINO B"
                            training={["Abdominal 3x10", "Remada 3x10", "Puxada Frontal 3x10", "Puxada na Polia 3x10", "Remada 3x10", "Puxada Frontal 3x10", "Puxada na Polia 3x10"]}


                        />

                        <TrainingCard
                            type="TREINO C"
                            training={["Abdominal 3x10", "Remada 3x10", "Puxada Frontal 3x10", "Puxada na Polia 3x10", "Remada 3x10", "Puxada Frontal 3x10", "Puxada na Polia 3x10"]}

                        />




                    </div>
                </main>
            </div>


        </main >
    )
}
