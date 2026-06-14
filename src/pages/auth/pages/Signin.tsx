
import { Link } from "react-router-dom";
import { Form } from "../../../components/ui/form/Form";
import { FormField } from "../../../components/ui/form/Form-Field/Form-Field";
import { Label } from "../../../components/ui/form/Form-Field/Label/Label";
import { Input } from "../../../components/ui/form/Form-Field/Input/Input";

const SignIn = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Sign In");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to continue
          </p>
        </div>

        <Form
          onSubmit={handleSubmit}
          className="mt-8"
        >
          <FormField>
            <Label htmlFor="email">
              Email
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </FormField>

          <FormField>
            <Label htmlFor="password">
              Password
            </Label>

            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </FormField>

          <button
            type="submit"
            className="w-full rounded-xl bg-black py-3 text-white"
          >
            Sign In
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>

            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">
                Or
              </span>
            </div>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border py-3 hover:bg-slate-50"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="h-5 w-5"
            />

            Continue with Google
          </button>
        </Form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="font-semibold text-black"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;