"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { ChartLine } from "lucide-react"

export const description = "An interactive bar chart"

const chartData = [
    { date: "2024-04-01", leanMass: 70, fatMass: 30 },
    { date: "2024-04-02", leanMass: 71, fatMass: 29 },
    { date: "2024-04-03", leanMass: 72, fatMass: 28 },
    { date: "2024-04-04", leanMass: 73, fatMass: 27 },
    { date: "2024-04-05", leanMass: 74, fatMass: 26 },
]

const chartConfig = {
    leanMass: {
        label: "Ganho de massa magra",
        color: "hsl(var(--chart-1))",
    },
    fatMass: {
        label: "Perda de gordura",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function ChartEvolution() {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>("leanMass")

    const total = React.useMemo(
        () => {
            const firstDay = chartData[0];
            const lastDay = chartData[chartData.length - 1];
            return {
                leanMass: lastDay.leanMass - firstDay.leanMass,
                fatMass: firstDay.fatMass - lastDay.fatMass,
            };
        },
        []
    )

    return (
        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader >
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className=" w-full flex items-center justify-between">
                        <CardTitle className="text-lg sm:text-xl text-gray-800">Gráfico de Evolução</CardTitle>
                        <ChartLine className="ml-auto w-4 h-4" />
                    </div>
                    <CardDescription className="flex w-full space-x-4">
                        {["leanMass", "fatMass"].map((key) => {
                            const chart = key as keyof typeof chartConfig
                            return (
                                <button
                                    key={chart}
                                    data-active={activeChart === chart}
                                    className="w-full border-t px-2 py-4 text-left data-[active=true]:bg-muted/50 sm:border-t-0"
                                    onClick={() => setActiveChart(chart)}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-muted-foreground">
                                            {chartConfig[chart].label}
                                        </span>
                                        <span className="text-lg font-bold leading-none sm:text-3xl">
                                            {total[chart].toLocaleString()}
                                        </span>
                                    </div>
                                </button>
                            )
                        })}
                    </CardDescription>
                </div>

            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="min-h-[200px]  w-full"
                >
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,

                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("pt-BR", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="views"
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                        />
                        <Bar dataKey="leanMass" fill="green" />
                        <Bar dataKey="fatMass" fill="red" />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
