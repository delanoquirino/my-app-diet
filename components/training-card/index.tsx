
interface TrainingCardProps {
    type: string
    training: string[]



}

export const TrainingCard = ({ type, training }: TrainingCardProps) => {
    return (
        <div className="flex flex-col h-full rounded-lg overflow-hidden border ">
            <div className="bg-sky-200 text-black p-6 flex items-center justify-center">
                <h2 className="text-lg font-medium">{type}</h2>
            </div>

            <div className=" p-4 flex-1 flex flex-col gap-4">
                <div>
                    <h3 className="text-amber-600 mb-2">Manhã</h3>
                    <ul className="space-y-1">
                        {training.map((training, index) => (
                            <li key={index} className="text-sm">
                                {training}
                            </li>
                        ))}
                    </ul>
                </div>




            </div>
        </div>
    )
}
