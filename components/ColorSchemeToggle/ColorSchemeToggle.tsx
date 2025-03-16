'use client';

import { useState } from 'react';
import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { Switch } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  
  const { setColorScheme } = useMantineColorScheme();
  const [checked, setChecked] = useState(false)

  const handleCheck = (isChecked: boolean): void => {

    setChecked(isChecked)

    if (isChecked) {
      setColorScheme('dark')
    }
    else {
      setColorScheme('light')
    }
  }

  return (
    <div style={{padding: 20}}>
      <Switch 
        size="md"
        checked={checked}
        onChange={ (event) => handleCheck(event.currentTarget.checked) }
        offLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
        onLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
      />
    </div>
  );
}
