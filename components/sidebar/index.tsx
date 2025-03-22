import { ChartLine, Dumbbell, Home, LogOut, Package, PanelBottom, Settings, Utensils } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
export const Sidebar = () => {
    return (
        <div className="flex w-full flex-col bg-muted/40">
            {/* Mobile */}
            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="h-5 w-5" />
                                <span className="sr-only">Abrir / fechar menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-x pt-5 pl-5">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link href="#" className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2" prefetch={false}>
                                    <Package className="h-5 w-5 transition-all " />
                                    <span className="sr-only">
                                        logo do Projeto
                                    </span>
                                </Link>

                                <Link href="/dashboard" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <Home className="h-5 w-5 transition-all " />
                                    Início
                                </Link>

                                <Link href="/dashboard/dieta" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <Utensils className="h-5 w-5 transition-all " />
                                    Dieta
                                </Link>

                                <Link href="/dashboard/exercicios" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <Dumbbell className="h-5 w-5 transition-all " />
                                    Exercícios
                                </Link>

                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <ChartLine className="h-5 w-5 transition-all " />
                                    Evolução
                                </Link>

                                <Link href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                    <Settings className="h-5 w-5 transition-all " />
                                    Configurações
                                </Link>


                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>

            {/* Desktop */}
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link href="#" className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full">
                            <Package className="h-4 w-4 transition-all " />
                            <span className="sr-only">Dashboard</span>
                        </Link>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="/dashboard" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <Home className="h-5 w-5 transition-all " />
                                    <span className="sr-only">Início</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Início</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="/dashboard/dieta" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <Utensils className="h-5 w-5 transition-all " />
                                    <span className="sr-only">Dieta</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Dieta</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="/dashboard/exercicios" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <Dumbbell className="h-5 w-5 transition-all " />
                                    <span className="sr-only">Exercícios</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Exercícios</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <ChartLine className="h-5 w-5 transition-all " />
                                    <span className="sr-only">Evolução</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Evolução</p>
                            </TooltipContent>
                        </Tooltip>

                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <Settings className="h-5 w-5 transition-all " />
                                    <span className="sr-only">Configurações</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Configurações</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                </nav>
                <nav className="mt-auto flex flex-col items-center gap-5 px-2 py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
                                    <LogOut className="h-5 w-5 transition-all " />
                                    <span className="sr-only">Sair</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Sair</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
        </div>
    )
}
