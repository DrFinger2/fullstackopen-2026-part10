import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

import Text from "./Text";
import theme from "../theme";
import useSignIn from "../hooks/useSignIn";
import Show from "./Show";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const [serverError, setServerError] = useState("");
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      setServerError("");
      await signIn({ username: values.username, password: values.password });
      navigate("/");
    } catch (e) {
      setServerError(e.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleChange = (field) => (value) => {
    if (serverError) {
      setServerError("");
    }
    formik.handleChange(field)(value);
  };

  const isUsernameError =
    formik.touched.username && Boolean(formik.errors.username);
  const isPasswordError =
    formik.touched.password && Boolean(formik.errors.password);
  const isServerError =
    !isUsernameError && !isPasswordError && Boolean(serverError);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isUsernameError && styles.inputError]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={handleChange("username")}
      />
      <Show when={isUsernameError}>
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      </Show>

      <TextInput
        style={[styles.input, isPasswordError && styles.inputError]}
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={handleChange("password")}
      />

      <Show when={isPasswordError}>
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      </Show>
      <Show when={isServerError}>
        <Text style={styles.errorText}>{serverError}</Text>
      </Show>

      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text fontWeight="bold" fontSize="subheading" style={styles.buttonText}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    padding: 20,
    backgroundColor: theme.colors.background,
  },

  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.border.radius,
    padding: 12,
    marginBottom: 15,
  },

  inputError: {
    borderColor: theme.colors.error,
  },

  button: {
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: theme.border.radius,
    backgroundColor: theme.colors.primary,
  },

  buttonText: {
    color: theme.colors.textLight,
  },
  errorText: {
    marginBottom: 10,
    color: theme.colors.error,
  },
});

export default SignIn;
