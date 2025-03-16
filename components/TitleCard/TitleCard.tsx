'use client'
import { useMantineTheme, Title } from '@mantine/core';

export function TitleCard() {


    return(
        <div style={{padding: 10}}>
            <Title
                order={1}>
                Overseer
            </Title>
        </div>
    );
}