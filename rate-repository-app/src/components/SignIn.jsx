import { useFormik } from "formik";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import * as yup from "yup";
import Text from "./Text";
import theme from "../theme";
import useSignIn from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

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

const SignIn = () => {
  const [signIn] = useSignIn();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const isUsernameError = formik.touched.username && formik.errors.username;
  const isPasswordError = formik.touched.password && formik.errors.password;

  const usernameStyle = [styles.input, isUsernameError && styles.inputError];
  const passwordStyle = [styles.input, isPasswordError && styles.inputError];

  return (
    <View style={styles.container}>
      <TextInput
        style={usernameStyle}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {isUsernameError && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}

      <TextInput
        style={passwordStyle}
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      {isPasswordError && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}

      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text fontWeight="bold" fontSize="subheading" style={styles.buttonText}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
