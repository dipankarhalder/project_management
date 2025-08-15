import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useToast } from "../../hooks/useToast";
import { FormInput } from "../../components/form/formInput";
import { Button } from "../../shared/button";
import { Input } from "../../shared/input";
import { RowItems } from "../style";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const ErrorText = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: red;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Home = () => {
  const addToast = useToast();

  const handleClick = () => {
    addToast({
      type: "success",
      title: "Action Successful",
      description: "Your action was successful.",
    });
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1000));
    alert("Form submitted!");
  };

  return (
    <>
      <RowItems>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <FormInput
                  {...field}
                  placeholder="Enter your name"
                  fullWidth
                  error={errors.name}
                />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <>
                  <FormInput
                    {...field}
                    placeholder="Enter your email"
                    fullWidth
                    variant="small"
                  />
                  {errors.email && (
                    <ErrorText>{errors.email.message}</ErrorText>
                  )}
                </>
              )}
            />
          </FormGroup>
          <FormGroup>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <>
                  <FormInput
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                    fullWidth
                    variant="small"
                  />
                  {errors.password && (
                    <ErrorText>{errors.password.message}</ErrorText>
                  )}
                </>
              )}
            />
          </FormGroup>
          <Button
            bgColor="#0d37a3"
            textColor="#fff"
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </form>
      </RowItems>
      <RowItems>
        <Button
          variant="small"
          bgColor="#0d37a3"
          textColor="#fff"
          onClick={handleClick}
          loading
        >
          Small Button
        </Button>
        <Button variant="small" bgColor="#0d37a3" textColor="#fff">
          Small Active Button
        </Button>
        <Button variant="medium" bgColor="#0d37a3" textColor="#fff" disabled>
          Button Disabled
        </Button>
        <Button variant="medium" bgColor="#0d37a3" textColor="#fff">
          Continue
        </Button>
      </RowItems>
      <RowItems>
        <Input variant="small" placeholder="Enter your name" fullWidth />
        <Input variant="medium" placeholder="Email address" fullWidth />
      </RowItems>
      <RowItems>
        <div className="box blue">Option</div>
        <div className="box green">Option</div>
        <div className="box red">Option</div>
        <div className="box orange">Option</div>
        <div className="box violet">Option</div>
        <div className="box yellow">Option</div>
        <div className="box blueitem">Option</div>
      </RowItems>
    </>
  );
};
