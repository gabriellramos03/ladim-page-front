"use client";

import { signIn } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Seja bem-vindo</CardTitle>
          <CardDescription>Faça login com GitHub ou Google</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full" onClick={() => signIn("github", { callbackUrl: "/dashboard" })}>
                  <img src="/github-mark-white.svg" alt="GitHub Logo" className="mr-2 w-6 h-6" />
                  Faça login com GitHub
                </Button>
                <Button variant="outline" className="w-full" onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
                  <img src="/logo_google.svg" alt="Google Logo" className="mr-2 w-6 h-6" />
                  Faça login com Google
                </Button>
              </div>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Ou continue com
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@gmail.com" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                    <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                      Esqueceu a senha?
                    </a>
                  </div>
                  <Input id="password" type="password" placeholder="senha" required />
                </div>
                <Link href="/dashboard">
                  <ShimmerButton className="py-2 px-4 w-44 ml-20">
                    <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm">
                      Login
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
              <div className="text-center text-sm">
                Não tem uma conta?{" "}
                <a href="#" className="underline underline-offset-4">
                  Inscrever-se
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}