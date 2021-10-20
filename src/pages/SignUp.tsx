import { Button, Icon, Input, SocialMedia } from "@/components";
import { Layout } from "@/layouts";

export function SignUp() {
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
      </div>

      <Button.Primary>Sign Up</Button.Primary>

      <div className="flex gap-4 justify-center">
        <SocialMedia.Apple />

        <SocialMedia.FaceBook />

        <SocialMedia.Google />
      </div>

      <div className="text-sm flex gap-2 justify-center">
        <span>If you have an account?</span>

        <a href="#" className="text-primary underline">
          Sign In here
        </a>
      </div>
    </Layout.Auth>
  );
}
