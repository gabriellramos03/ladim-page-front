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
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:8050/api/autenticarLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: email, senha: password }),
    });
  
    const data = await response.json();
  
    if (data.status === 1) {
      const signInResult = await signIn("credentials", {
        login: email,
        password: password,
        callbackUrl: "/dashboard",
        redirect: false,
      });
  
      if (signInResult?.error) {
        setError(signInResult.error);
      } else {
        window.location.href = "/dashboard";
      }
    } else {
      setError(data.aviso || "Erro ao fazer login");
    }
  };
  

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Seja bem-vindo</CardTitle>
          <CardDescription>Faça login com GitHub ou Google</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    signIn("github", { callbackUrl: "/dashboard" })
                  }
                >
                  <img
                    src="/github-mark-white.svg"
                    alt="GitHub Logo"
                    className="mr-2 w-6 h-6"
                  />
                  Faça login com GitHub
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    signIn("google", { callbackUrl: "/dashboard" })
                  }
                >
                  <img
                    src="/logo_google.svg"
                    alt="Google Logo"
                    className="mr-2 w-6 h-6"
                  />
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
                  <Label htmlFor="email">Login</Label>
                  <Input
                    id="email"
                    type=""
                    placeholder="login"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Esqueceu a senha?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="senha"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <ShimmerButton 
                  className="py-2 px-4 w-44 ml-20"
                  onClick={handleLogin}
                >
                  <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm">
                    Login
                  </span>
                </ShimmerButton>
              </div>
              <div className="text-center text-sm">
                Não tem uma conta?{" "}
                <Link href='/cadastro' className="underline underline-offset-4">
                    Inscrever-se
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}