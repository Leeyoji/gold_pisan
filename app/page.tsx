import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      <Button asChild>
          <LoginLink> Sign In</LoginLink>
      </Button>
      <Button asChild>
          <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  );
}
