'use client';

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center">Portfolio UX/UI</h1>
        
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-2xl font-semibold">Button Variants</h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="default">Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link Style</Button>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Button size="lg">Large</Button>
            <Button>Default Size</Button>
            <Button size="sm">Small</Button>
            <Button size="icon">
              <span>🚀</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}