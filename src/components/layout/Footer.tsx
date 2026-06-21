import { MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <>
      <Button className="fixed bottom-6 right-8 z-50 h-14 gap-3 rounded-[8px] bg-sd-chat px-5 text-base font-bold text-white shadow-xl hover:bg-sd-chat/95 max-sm:right-4">
        <span className="size-3 rounded-full bg-[#52d841]" />
        Live chat
        <MessageCircle data-icon="inline-end" />
      </Button>
      <footer className="border-t border-sd-line bg-white px-8 py-10 text-center text-sm font-semibold text-sd-muted">
        Sleep Diving premium sleep systems. Original visual design and assets for this project.
      </footer>
    </>
  )
}
