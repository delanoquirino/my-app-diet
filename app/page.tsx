
import PricingCard from '@/components/pricing-card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import funcionamento from '@/public/images/funcionamento.jpg';
import { Check, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default async function Home() {
  return (
    <main>
      <section className="container mx-auto text-center pb-20 px-2 md:px-0">
        <nav className="flex justify-between items-center py-4">
          <p>Logo</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon size={24} className="md:hidden cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <a href={'/#funcionamento'}>
                <DropdownMenuItem>Funcionamento</DropdownMenuItem>
              </a>
              <DropdownMenuItem>Preço</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/login">
                  <Button variant={'default'}>Login</Button>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="items-center gap-1 hidden md:flex">
            <Link href={'/dashboard'}>
              <Button variant={'link'}>Dashboard</Button>
            </Link>
            <Link href={'#funcionamento'}>
              <Button variant={'link'}>Funcionamento</Button>
            </Link>
            <Link href={'#preco'}>
              <Button variant={'link'}>Preço</Button>
            </Link>
            <Link href="/login">
              <Button variant={'default'}>Login</Button>
            </Link>
          </div>
        </nav>
        <h1 className="md:text-6xl text-2xl font-bold mt-8 md:mt-16">
          Transforme Seu Corpo{' '}
        </h1>
        <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
          Deixe que nós cuidamos do seu plano de treino e dieta. Assine nossa plataforma e
          receba todos os meses um novo plano personalizado.
        </p>
        <form className="md:mt-16 mt-10">
          <div className="flex gap-2 justify-center">
            <Input
              placeholder="Coloque seu email"
              type="text"
              className="max-w-sm border-gray-300 border"
            />
            <Button>Assine Agora</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Comece seu plano agora mesmo. Cancele quando quiser.{' '}
          </p>
        </form>
      </section>
      <section className="bg-white md:py-16 py-8" id="funcionamento">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center my-10">
            Como Funciona?
          </h2>
          <div className="mx-24 xl:mx-80 flex flex-col md:flex-row items-center justify-between gap-10">
            <Image src={funcionamento} alt="Funcionamento" width={500} height={500} />
            <ul className="md:text-2xl text-lg text-muted-foreground space-y-4 md:space-y-6 flex-shrink-0">
              <li className="flex items-center justify-between gap-4">
                Acesso a 1 plano de treino e dieta por mês{' '}
                <Check size={24} className="text-green-600" />
              </li>
              <li className="flex items-center justify-between gap-4">
                Planos personalizados
                <Check size={24} className="text-green-600" />
              </li>
              <li className="flex items-center justify-between gap-4">
                Cancele quando quiser
                <Check size={24} className="text-green-600" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="md:py-16 py-8 text-center px-2" id="preco">
        <h2 className="md:text-6xl text-2xl font-bold md:mt-16">
          Preço Simples e Transparente
        </h2>
        <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
          Por que complicar com inúmeros planos? Nós sabemos exatamente o que é melhor
          para você. Assine o nosso plano mensal Pro Premium VIP e garanta
          mensalmente um novo plano de treino e dieta. E por menos de um café por
          dia.
        </p>

        <div className="flex justify-center">
          <PricingCard />
        </div>
      </section>
      <section className="bg-white md:py-16 py-10 text-center">
        <h2 className="md:text-6xl text-2xl font-bold md:mt-16">
          Pronto Para Transformar Sua Vida?
        </h2>
        <p className="text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto">
          Junte-se a milhares de outras pessoas. Assine nosso produto e garanta
          sua transformação física{' '}
        </p>
        <Button className="mt-14 w-96">Assine Agora</Button>
        <p className="text-xs text-muted-foreground mt-2">
          Comece seu plano agora mesmo. Cancele quando quiser.{' '}
        </p>
        <footer className="mt-16 border-t border-gray-300 pt-10">
          <p>Logo</p>
          <p className="text-muted-foreground">
            © 2024 FitSaaS. Todos os direitos reservados.
          </p>
        </footer>
      </section>
    </main>
  );
}