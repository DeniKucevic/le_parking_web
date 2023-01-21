import { createStyles, Card, Center, Image } from "@mantine/core";
import { useState } from "react";
import { useSignIn, useClient } from "../../hooks";
import { LoginPageImage } from "../../assets";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "100%",
  },
}));

export const AuthPage = () => {
  const { classes } = useStyles();

  const { auth } = useClient();
  const navigate = useNavigate();

  auth.onAuthStateChange((_, session) => {
    if (session) {
      navigate("/dashboard");
    }
  });

  return (
    <Center className={classes.wrapper}>
      <Card shadow="sm" p="md" radius="md" withBorder>
        <Card.Section>
          <Image src={LoginPageImage} height={160} alt="login page image" />
        </Card.Section>
        <Auth
          supabaseClient={useClient()}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google", "facebook", "twitter"]}
          redirectTo="http://localhost:5173/dashboard"
        />
      </Card>
    </Center>
  );
};
