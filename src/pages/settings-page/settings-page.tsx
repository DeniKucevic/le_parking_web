import { Center } from "@mantine/core";
import { ThemeSwitch } from "@components";

import { Avatar, Text, Button, Paper } from "@mantine/core";
import { useClient } from "@hooks";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { IconFaceId } from "@tabler/icons";

// type SettingsPageProps = {
//   avatar: string;
//   name: string;
//   email: string;
//   job: string;
// };

type Profile = {
  avatar_url: null | string;
  full_name: null | string;
  id: string;
  updated_at: null | string;
  username: null | string;
};

export const SettingsPage = () => {
  const client = useClient();
  const { auth } = client;

  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    auth.getUser().then(({ data }) => {
      const { user } = data;
      if (user) {
        setUser(user);
        client
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single()
          .then(({ data }) => setProfile(data));
      }
    });
  }, []);

  return (
    <Center>
      <Paper
        radius="md"
        withBorder
        p="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        })}
      >
        <Avatar src={profile?.avatar_url} size={120} radius={120} mx="auto" />
        <Text align="center" size="lg" weight={500} mt="md">
          {profile?.id}
        </Text>
        <Text align="center" color="dimmed" size="sm">
          {user?.email}
        </Text>
        <Text align="center" color="dimmed" size="sm">
          {profile?.full_name} • {profile?.username}
        </Text>
        <Button variant="default" fullWidth mt="md">
          Send message
        </Button>
      </Paper>
    </Center>
  );
};
