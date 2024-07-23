import { Form, Link, useNavigate } from "react-router-dom";
import ReadWriteSvg from "../../assets/ReadWriteSvg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import Background from "../../components/hybrid/ParticleBackground";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./authSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

function Login() {
  const windowWidth = useWindowWidth();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    toast.dismiss();
    toast.promise(dispatch(login({ data })).unwrap(), {
      loading: "Signing in...",
      success: () => "Signed in successfully",
      error: (err) => err,
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      naviagte("/home");
    }
  }, [isAuthenticated, naviagte]);

  return (
    <div className="relative flex grow items-center justify-center">
      <Background />
      <div className="z-50 hidden sm:block">
        <ReadWriteSvg
          zWidth={0.4 * windowWidth}
          zHeigth={0.4 * windowWidth}
          y={0}
          x={400 * windowWidth}
        />
      </div>
      <Form
        className="z-50 flex max-w-96 grow flex-col px-8 gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="p mb-3 text-center text-3xl font-bold">Welcome Back!</h1>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:border-none focus-visible:ring-black/50"
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          className="focus:border-none focus-visible:ring-black/50"
        />
        <Button type="submit">{loading ? "Logging in..." : " LOGIN"}</Button>
        <Link to={"/sign-up"}>
          New to viBlog?
          <span className="underline"> Register here &rarr;</span>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
