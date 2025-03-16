'use client'

import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TitleCard } from '../TitleCard/TitleCard';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export function MainPage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell 
        header={{ height: 60 }}
        navbar={{
            width: 0,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
        }}
        padding="md"
    >
      <AppShell.Header>
        {/* <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        /> */}
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%"}}>
            <TitleCard />
            <ColorSchemeToggle />
        </div>
      </AppShell.Header>

      <AppShell.Main>
        <NavigationBar />
      </AppShell.Main>

    </AppShell>
  );
}