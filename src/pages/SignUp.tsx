import { Icon, Input, SocialMedia } from "@/components";

export function SignUp() {
  return (
    <main className="flex flex-col h-screen p-8 text-white text-sm text-center">
      <header className="space-y-4 mt-20">
        <h1 className="text-6xl">Audio</h1>

        <p>It's modular and designed to last</p>
      </header>

      <form className="flex-1 flex flex-col gap-6 py-32">
        <div className="placeholder-gray-dark space-y-5 mt-auto">
          <Input
            icon={<Icon.Mail className="w-5 text-gray-dark" />}
            placeholder="Email"
            className="text-black"
          />

          <Input
            icon={<Icon.Lock className="w-5 text-gray-dark" />}
            placeholder="Password"
            className="text-black"
          />
        </div>

        <button className="bg-primary rounded-lg py-3">Sign Up</button>

        <div className="flex gap-4 justify-center">
          <SocialMedia href="#">
            <Icon.Apple />
          </SocialMedia>

          <SocialMedia href="#">
            <Icon.FaceBook />
          </SocialMedia>

          <SocialMedia href="#">
            <Icon.Google />
          </SocialMedia>
        </div>

        <div className="text-sm flex gap-2 justify-center">
          <span>If you have an account?</span>

          <a href="#" className="text-primary underline">
            Sign In here
          </a>
        </div>
      </form>
    </main>
  );
}
