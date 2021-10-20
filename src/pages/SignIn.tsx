import { Icon, Input } from "@/components";

export function SignIn() {
  return (
    <main className="flex flex-col h-screen p-8 text-white text-sm text-center">
      <header className="space-y-4 mt-20">
        <h1 className="text-6xl">Audio</h1>

        <p>It's modular and designed to last</p>
      </header>

      <form className="flex-1 flex flex-col gap-6 py-12">
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

          <div>
            <a href="#" className=" text-white">
              Forgot Password
            </a>
          </div>
        </div>

        <button className="bg-primary rounded-lg py-3">Sign In</button>

        <div className="text-sm flex gap-2 justify-center">
          <span>Didn't have any account?</span>

          <a href="#" className="text-primary underline">
            Sign Up here
          </a>
        </div>
      </form>
    </main>
  );
}
