import React from "react"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { Mail, Lock } from "lucide-react"

// shadcn/ui components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

// backend functions
import { login, loginWithGoogle } from "../backend/auth"

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const user = await login(data.email, data.password)
      console.log("User logged in:", user)
      alert("Login successful!")
    } catch (err) {
      console.error("Login error:", err)
      alert(err.message)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
    } catch (err) {
      console.error("Google login error:", err)
      alert(err.message)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-3xl border border-gray-200 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-800">
            Welcome Back
          </CardTitle>
          <p className="text-center text-sm text-gray-500 mt-1">
            Log in to continue
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  className="pl-10 rounded-xl"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 rounded-xl"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min 6 characters" },
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full rounded-xl py-3 text-base font-medium shadow-md hover:scale-[1.02] transition-transform"
            >
              Log In
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-2 my-6">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 rounded-xl py-3 hover:bg-gray-50 transition"
            onClick={handleGoogleLogin}
          >
            <FcGoogle className="text-xl" />
            <span className="font-medium">Continue with Google</span>
          </Button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-indigo-600 font-medium hover:underline"
            >
              Sign up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
