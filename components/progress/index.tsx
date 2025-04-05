import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface UserProp {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
}

export const Progress = ({ user }: UserProp) => {
    return (
        <Card className="flex-1">
            <CardHeader >
                <div className="flex items-center justify-center ">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">Progresso</CardTitle>
                </div>
                <CardDescription>
                    Resultados de evolução
                </CardDescription>
            </CardHeader>
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar>
                        <AvatarImage src={user?.image || ''} />
                        <AvatarFallback>
                            <User />
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base">{user?.name}</p>

                    </div>

                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <div>
                        <p className="text-sm sm:text-base">Peso Atual: 70 kg</p>
                        <p className="text-sm sm:text-base">Meta de Peso: 65 kg</p>
                        <p className="text-sm sm:text-base">Perda de Peso: 5 kg</p>
                    </div>

                </article>
            </CardContent>
        </Card>
    )
}
