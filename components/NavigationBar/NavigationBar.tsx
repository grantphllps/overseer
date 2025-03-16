'use client'

import { Tabs } from '@mantine/core';
import { IconDashboard, IconList, IconAdjustments, IconClipboardText } from '@tabler/icons-react';
import { Parameters } from '../Parameters/Parameters';

export function NavigationBar() {
  return (
    <div>
    <Tabs defaultValue="dashboard" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value="dashboard" leftSection={<IconDashboard size={12} />}>
          Dashboard
        </Tabs.Tab>
        <Tabs.Tab value="parameters" leftSection={<IconList size={12} />}>
          Parameters
        </Tabs.Tab>
        <Tabs.Tab value="tuning" leftSection={<IconAdjustments size={12} />}>
          Tuning
        </Tabs.Tab>
        <Tabs.Tab value="logs" leftSection={<IconClipboardText size={12} />}>
          Logs
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="dashboard">
        Dashboard Content
      </Tabs.Panel>

      <Tabs.Panel value="parameters">
        <Parameters />
      </Tabs.Panel>

      <Tabs.Panel value="tuning">
        Tuning Conent
      </Tabs.Panel>

      <Tabs.Panel value="logs">
        L
      </Tabs.Panel>
    </Tabs>
    </div>
  );
}