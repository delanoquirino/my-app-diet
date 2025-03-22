import { ChartEvolution } from "@/components/chartEvolution";
import { Progress } from "@/components/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Info, User, Utensils } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Dados */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                <h1>Dados</h1>
              </CardTitle>
              <User className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Minhas informações
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base ">Peso: 70 kg</p>
            <p className="text-sm sm:text-base ">Altura: 170 cm</p>
            <p className="text-sm sm:text-base ">Idade: 25 anos</p>
            <p className="text-sm sm:text-base ">IMC: 24.2</p>
          </CardContent>
        </Card>

        {/* Objetivo */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                <h1>Objetivo</h1>
              </CardTitle>
              <Info className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Objetivo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base ">Perca de Peso</p>
            <p className="text-sm sm:text-base ">Ganho de massa muscular</p>
          </CardContent>
        </Card>

        {/* Dieta */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                <h1>Dieta</h1>
              </CardTitle>
              <Utensils className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Minha dieta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base ">Calorias: 2000 kcal</p>
            <p className="text-sm sm:text-base ">Carboidratos: 200 g</p>
            <p className="text-sm sm:text-base ">Proteínas: 150 g</p>
            <p className="text-sm sm:text-base ">Gorduras: 50 g</p>
          </CardContent>
        </Card>

        {/* Treino */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                <h1>Treino</h1>
              </CardTitle>
              <Dumbbell className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Meu treino
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base ">Treino A - 30 minutos</p>
            <p className="text-sm sm:text-base ">Treino B - 30 minutos</p>
            <p className="text-sm sm:text-base ">Treino C - 30 minutos</p>
            <p className="text-sm sm:text-base ">Treino D - 30 minutos</p>
          </CardContent>
        </Card>



      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        {/* Progresso */}

        <ChartEvolution />
        <Progress />

      </section>

    </main >
  );
}
