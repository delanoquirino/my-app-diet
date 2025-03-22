
interface MealPlannerCardProps {
    day: string
    meals: {
        morning: string[]
        afternoon: string[]
        night: string[]
    }

}
export const PlannerCard = ({ day, meals }: MealPlannerCardProps) => {
    return (
        <div className="flex flex-col h-full rounded-lg overflow-hidden border ">
            <div className="bg-sky-200 text-black p-6 flex items-center justify-center">
                <h2 className="text-lg font-medium">{day}</h2>
            </div>

            <div className=" p-4 flex-1 flex flex-col gap-4">
                <div>
                    <h3 className="text-amber-600 mb-2">Manhã</h3>
                    <ul className="space-y-1">
                        {meals.morning.map((meal, index) => (
                            <li key={index} className="text-sm">
                                {meal}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-cyan-500 mb-2">Tarde</h3>
                    <ul className="space-y-1">
                        {meals.afternoon.map((meal, index) => (
                            <li key={index} className="text-sm">
                                {meal}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-amber-600 mb-2">Noite</h3>
                    <ul className="space-y-1">
                        {meals.night.map((meal, index) => (
                            <li key={index} className="text-sm">
                                {meal}
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </div>
    )
}
