import { Button, Input, SocialMedia } from "@/components";
import { Layout } from "@/layouts";

export function SignUp() {
  return (
    <Layout.Auth>
      <div className="placeholder-gray-dark space-y-5 mt-auto">
        <Input.Email />

        <Input.Password />
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
