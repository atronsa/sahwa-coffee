"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Coffee, Lock, Mail, Eye, EyeOff } from "lucide-react";
import {
  LoginFormSchema,
  type LoginFormValues,
  type LoginFormErrors,
} from "@/schema/login-form";

const EMPTY_VALUES: LoginFormValues = {
  email: "",
};

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";

  const [values, setValues] = useState<LoginFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<LoginFormErrors>({});

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({ ...prev, email: e.target.value }));
    // Clear the field error as soon as the user starts correcting it
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");

    const result = LoginFormSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0],
      });
      return;
    }

    if (!password) {
      setAuthError("Enter your password");
      return;
    }

    setErrors({});
    setLoading(true);

    const res = await signIn("credentials", {
      email: result.data.email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setAuthError("Invalid email or password");
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-cream font-montserrat flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-stone-900">
            <Coffee size={20} className="text-cream" />
          </div>
          <h1 className="text-2xl font-semibold text-stone-900">Admin Login</h1>
          <p className="mt-2 text-xs text-stone-500">
            Sign in to view submissions and inquiries
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          noValidate
          className="rounded-xl border border-stone-200 bg-white/60 p-6 shadow-sm backdrop-blur-sm"
        >
          <div className="mb-4">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-stone-900">
              Email
            </label>
            <div
              className={`flex items-center gap-2 rounded-lg border bg-white px-3 py-2.5 transition-colors ${
                errors.email
                  ? "border-red-400"
                  : "border-stone-200 focus-within:border-amber-300"
              }`}
            >
              <Mail
                size={14}
                className={`shrink-0 ${
                  errors.email ? "text-red-400" : "text-amber-600"
                }`}
              />
              <input
                type="email"
                value={values.email}
                onChange={handleEmailChange}
                className="w-full bg-transparent text-xs sm:text-sm text-stone-900 outline-none"
                placeholder="admin@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-[10px] sm:text-[11px] font-medium text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-stone-900">
              Password
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2.5 focus-within:border-amber-300 transition-colors">
              <Lock size={14} className="shrink-0 text-amber-600" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-stone-900 outline-none"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="shrink-0 cursor-pointer text-stone-400 transition-colors hover:text-amber-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          {authError && (
            <p className="mb-4 text-xs font-medium text-red-600">{authError}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-stone-900 cursor-pointer px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-cream transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
