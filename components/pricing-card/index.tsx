import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function PricingCard() {
    return (
        <Card className="w-[350px] text-left md:mt-20 mt-10">
            <CardHeader>
                <CardTitle>Plano VIP</CardTitle>
                <CardDescription>
                    Tudo que você precisa para seu plano de treino e dieta
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-4xl font-bold mb-8 mt-4">
                    R$50
                    <span className="font-normal text-muted-foreground text-lg">
                        /mês
                    </span>
                </p>
                <ul>
                    <li className="flex gap-2 text-muted-foreground">
                        <Check className="w-4 text-green-600" />
                        Acesso seu plano de treino e dieta
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                        <Check className="w-4 text-green-600" />
                        Planos personalizados
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                        <Check className="w-4 text-green-600" />
                        Acesso ilimitado
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                        <Check className="w-4 text-green-600" />
                        Cancele quando quiser
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                        <Check className="w-4 text-green-600" />
                        Dúvidas via WhatsApp
                    </li>
                </ul>
            </CardContent>
            <CardFooter>
                <Button className="w-full cursor-pointer">Assine Agora</Button>
            </CardFooter>
        </Card>
    );
}