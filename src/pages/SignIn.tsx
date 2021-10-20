import { Button, Icon, Input } from "@/components";
import { Layout } from "@/layouts";

export function SignIn() {
  return (
    <Layout.Auth>
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

      <Button.Primary>Sign In</Button.Primary>

      <div className="text-sm flex gap-2 justify-center">
        <span>Didn't have any account?</span>

        <a href="#" className="text-primary underline">
          Sign Up here
        </a>
      </div>
    </Layout.Auth>
  );
}
