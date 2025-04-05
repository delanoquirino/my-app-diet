
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"
import { getServerSession } from "next-auth"
import Link from "next/link"
export const Header = async () => {
    const session = await getServerSession();


    return (
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
                {session && (
                    <Link href={'/dashboard'} >
                        <Button variant={'link'} className="cursor-pointer">Meu Painel</Button>
                    </Link>
                )}
                <Link href={'#funcionamento'} >
                    <Button variant={'link'} className="cursor-pointer">Funcionamento</Button>
                </Link>
                <Link href={'#preco'} >
                    <Button variant={'link'} className="cursor-pointer" >Preço</Button>
                </Link>
                <Link href="#/login" >
                    <Button variant={'default'} className="cursor-pointer">Login</Button>
                </Link>
            </div>
        </nav>
    )
}