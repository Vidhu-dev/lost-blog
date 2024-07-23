import { Form, Navigate, useNavigate } from "react-router-dom";
import ReadWriteSvg from "../../assets/ReadWriteSvg";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import Background from "../../components/ParticleBackground";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./authSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

function SignUp() {
  const windowWidth = useWindowWidth();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    toast.dismiss();
    toast.promise(dispatch(register({ data })).unwrap(), {
      loading: "Registering...",
      success: () => "Registered successfully",

      error: (err) => err,
    });
  };
  useEffect(() => {
    if (isAuthenticated) {
      //add delay of 200ms

      
      naviagte("/");
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
        className="z-50 flex max-w-96 grow flex-col px-8"
        onSubmit={handleSubmit}
      >
        <h1 className="p mb-3 text-center text-3xl font-bold">
          Create Account
        </h1>
        <Input label={"Name"} size={"large"} name={"fullName"} type="text" />
        <Input label={"Email"} size={"large"} name={"email"} type="email" />
        <Input
          label={"Password"}
          size={"large"}
          name={"password"}
          type="password"
        />
        <Button type="submit" margin="my-4" dark={!loading}>
          {loading ? "Signing up..." : " SIGN UP"}
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
