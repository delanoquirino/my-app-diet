"use client"

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from '@/components/ui/card';
import { signIn } from 'next-auth/react';


export default function LoginPage() {
    return (
        <>
            <Card className="max-w-sm w-full rounded-2xl gap-2">
                <CardHeader className="pt-4">
                    <h2 className="text-xl font-bold">Boas Vindas</h2>
                    <CardDescription>Faça seu login com google.</CardDescription>
                </CardHeader>
                <CardContent className="px-4 ">
                    <div>
                        <Button className="w-full mt-6" type="submit" onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
                            Login
                        </Button>
                    </div>
                </CardContent>
            </Card>

        </>
    );
}