import { PlannerCard } from "@/components/planner-card"
export default function DietaPage() {
    return (
        <main className="sm:ml-14 p-4">
            <div className="min-h-screen p-4">
                <header className="py-6">
                    <h1 className="text-2xl font-mono">Minha Rotina</h1>

                </header>

                <main className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <PlannerCard
                            day="SEGUNDA FEIRA"
                            meals={{
                                morning: ["🥑 Guacamole"],
                                afternoon: ["🍅 Tomate e Mussarela", "🌰 Castanha de Caju 🍽️ Almoço"],
                                night: ["🍌 Salada de Frutas"],
                            }}

                        />

                        <PlannerCard
                            day="TERÇA FEIRA"
                            meals={{
                                morning: ["🥑 Guacamole"],
                                afternoon: ["🍅 Tomate e Mussarela", "🌰 Castanha de Caju 🍽️ Almoço"],
                                night: ["🍌 Salada de Frutas"],
                            }}

                        />

                        <PlannerCard
                            day="QUARTA FEIRA"
                            meals={{
                                morning: ["🥑 Guacamole"],
                                afternoon: ["🌰 Castanha de Caju 🍽️ Almoço"],
                                night: ["🍌 Salada de Frutas"],
                            }}

                        />

                        <PlannerCard
                            day="QUINTA FEIRA"
                            meals={{
                                morning: ["🥑 Guacamole"],
                                afternoon: ["🍅 Tomate e Mussarela", "🌰 Castanha de Caju 🍽️ Almoço"],
                                night: ["🍌 Salada de Frutas"],
                            }}

                        />

                        <PlannerCard
                            day="SEXTA FEIRA"
                            meals={{
                                morning: ["🥑 Guacamole"],
                                afternoon: ["🍽️ Almoço 🍅 Tomate e Mussarela"],
                                night: [],
                            }}

                        />

                        <PlannerCard
                            day="SÁBADO"
                            meals={{
                                morning: ["🥑 Guacamole"],
                                afternoon: ["🌰 Castanha de Caju 🍽️ Almoço"],
                                night: ["🍌 Salada de Frutas"],
                            }}

                        />

                        <PlannerCard
                            day="DOMINGO"
                            meals={{
                                morning: ["🥑 Guacamole"],
                                afternoon: ["🌰 Castanha de Caju 🍽️ Almoço"],
                                night: ["🍌 Salada de Frutas"],
                            }}

                        />
                    </div>
                </main>
            </div>


        </main >
    )
}
