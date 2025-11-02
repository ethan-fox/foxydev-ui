import "./App.css";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ContactInfoInput from "@/components/domain/contact-info-input";
import { cn } from "./lib/utils";

function App() {
  const handleContactSubmit = (data: { email: string; phone: string }) => {
    console.log("Contact info submitted:", data);
    // TODO: Send to backend/email service
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Welcome!</h1>
          <p className="text-xl text-muted-foreground">
            We're happy to see you.
          </p>
        </header>

        {/* TODO nail down styling better. */}
        <Empty className={cn("bg-muted/15")}>
          <EmptyHeader>
            <EmptyMedia variant="default">
              <Avatar className="size-16">
                <AvatarImage
                  src="https://images.emojiterra.com/google/android-12l/512px/1f6a7.png"
                  alt="Profile"
                />
                <AvatarFallback>EF</AvatarFallback>
              </Avatar>
            </EmptyMedia>
            <EmptyTitle>There's nothing here...</EmptyTitle>
            <EmptyDescription>
              ... yet! This website is currently under construction.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <p className="text-sm text-muted-foreground mb-4">
              In the meantime, feel free to leave some or all of your contact
              info so we can connect when it's ready:
            </p>
            <ContactInfoInput
              onSubmit={handleContactSubmit}
              className="w-full"
            />
          </EmptyContent>
        </Empty>
      </div>
    </div>
  );
}

export default App;
