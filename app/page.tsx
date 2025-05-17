"use client";

import Button from "@/components/ui/button/button";
import Card from "@/components/ui/card/card";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col p-5 lg:p-40 h-screen w-screen items-center justify-center">
      <h2>Welcome to Meloworld!</h2>
      <Card className="p-5 gap-5 bg-secondary flex flex-col justify-start items-center">
        <h3>You are joining in as a</h3>
        <Button
          onClick={() => router.push("/auth/candidate/login")}
          variant="outline"
          size="xs"
        >
          Candidate
        </Button>
        <Button
          onClick={() => router.push("/org/dashboard")}
          variant="outline"
          size="xs"
        >
          Organization
        </Button>
        <Button
          onClick={() => router.push("/auth/admin/login")}
          variant="outline"
          size="xs"
        >
          Admin
        </Button>
        <Button
          onClick={() => router.push("/auth/therapist/login")}
          variant="outline"
          size="xs"
        >
          Therapist
        </Button>
      </Card>
    </main>
  );
}
